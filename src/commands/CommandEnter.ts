import { EPacketReceived } from "../events/EventTypes";
import { GlobalEvents } from "../mmocore//EventEmitter";
import MMOConfig from "../mmocore//MMOConfig";
import GameClient from "../network/GameClient";
import AbstractGameCommand from "./AbstractGameCommand";
import { LoginFailReason } from "../enums/LoginFailReason";
import { PlayFailReason } from "../enums/PlayFailReason";
import { AccountKickedReason } from "../enums/AccountKickedReason";
import LoginClient from "../network/LoginClient";
import MMOSession from "../mmocore//MMOSession";
import { bigToUint8Array, modPow } from "../mmocore/BigintArith";

export default class CommandEnter extends AbstractGameCommand {
  protected _config: MMOConfig = new MMOConfig();

  execute(config?: MMOConfig | Record<string, unknown>): Promise<{ login: LoginClient; game: GameClient }> {
    if (config) {
      this._config = { ...new MMOConfig(), ...(config as MMOConfig) };
    }

    return new Promise((resolve, reject) => {
      this.LoginClient.init(this._config);
      this.LoginClient.connect()
        .then(() => {
          GlobalEvents.once("PacketReceived:Init", () =>
            this.LoginClient.sendPacket("RequestAuthGameGuard", {
              session_id: MMOSession.SessionId,
            })
          );

          // Authenticate
          GlobalEvents.once("PacketReceived:GGAuth", () => {
            if (this._config.Username.length > 14) {
              throw Error("Username is too long");
            }

            if (this._config.Password.length > 16) {
              throw Error("Password is too long");
            }
            const hexStr = (buffer: Uint8Array) => {
              return Array.from(Array.from(buffer), (byte) => ("0" + (byte & 0xff).toString(16)).slice(-2)).join("");
            };
            const loginInfo = new Uint8Array(128);

            loginInfo[0x5b] = 0x24;
            [...this._config.Username].forEach((k, i) => (loginInfo[0x5e + i] = k.charCodeAt(0)));
            [...this._config.Password].forEach((k, i) => (loginInfo[0x6c + i] = k.charCodeAt(0)));

            const e = BigInt(65537);
            const modulus = BigInt(`0x${hexStr(MMOSession.PublicKey)}`);
            const input = BigInt(`0x${hexStr(loginInfo)}`);
            const encryptedLoginInfo = bigToUint8Array(modPow(input, e, modulus));

            this.LoginClient.sendPacket("RequestAuthLogin", {
              encrypted_login_info: encryptedLoginInfo,
              session_id: MMOSession,
            });
          });

          GlobalEvents.once("PacketReceived:LoginOk", (e: EPacketReceived) => {
            this.LoginClient.sendPacket("RequestServerList", {
              account_id: MMOSession.AccountId,
              auth_key: MMOSession.AuthKey,
            });
          });

          GlobalEvents.once("PacketReceived:LoginFail", (e: EPacketReceived) => {
            reject((LoginFailReason as any)[e.data.packet.get("reason") as number]);
          });

          GlobalEvents.once("PacketReceived:ServerList", (e: EPacketReceived) => {
            const gameServerId = this.LoginClient.ServerId ?? (e.data.packet.get("last_game_server") as number);

            this.LoginClient.sendPacket("RequestServerLogin", {
              account_id: MMOSession.AccountId,
              auth_key: MMOSession.AuthKey,
              game_server: gameServerId,
            });
          });

          GlobalEvents.once("PacketReceived:PlayFail", (e: EPacketReceived) => {
            reject((PlayFailReason as any)[e.data.packet.get("reason") as number]);
          });

          GlobalEvents.once("PacketReceived:AccountKicked", (e: EPacketReceived) => {
            reject((AccountKickedReason as any)[e.data.packet.get("reason") as number]);
          });

          GlobalEvents.once("PacketReceived:PlayOk", (e: EPacketReceived) => {
            this.LoginClient.Connection.close();
            const gameConfig = {
              ...this._config,
              ...{
                Ip: MMOSession.Server.host,
                Port: MMOSession.Server.port,
              },
            };
            // this.GameClient.Session = MMOSession;
            this.GameClient.init(gameConfig as MMOConfig);
            this.GameClient.connect()
              .then(() =>
                this.GameClient.sendPacket("SendProtocolVersion", {
                  protocol_version: 273,
                })
              )
              .catch((err) => reject(err));
          });

          GlobalEvents.once("PacketReceived:VersionCheck", (e: EPacketReceived) => {
            this.GameClient.sendPacket("RequestLogin", {
              account_name: MMOSession.Username,
              game_server_account_id: MMOSession.GameServerAccountId,
              game_server_session_id: MMOSession.GameServerSessionId,
              account_id: MMOSession.AccountId,
              auth_key: MMOSession.AuthKey,
            });
          });

          GlobalEvents.once("PacketReceived:CharacterSelectionInfo", (e: EPacketReceived) => {
            this.GameClient.sendPacket("RequestCharacterSelect", {
              character_index: this.GameClient.Config.CharSlotIndex ?? 0,
            });
          });

          GlobalEvents.once("PacketReceived:CharacterSelected", (e: EPacketReceived) => {
            this.GameClient.sendPacket("RequestManorList")
              .then(() => this.GameClient.sendPacket("RequestKeyMapping"))
              .then(() => this.GameClient.sendPacket("EnterWorld"))
              .catch((err) => reject("Enter world fail." + err));
          });

          GlobalEvents.on("PacketReceived:SystemMessage", (e: EPacketReceived) => {
            if ((e.data.packet.get("message") as number) === 34 /** WELCOME_TO_LINEAGE */) {
              const param = {
                login: this.LoginClient,
                game: this.GameClient,
              };
              GlobalEvents.fire("LoggedIn", param);
              resolve(param);
            }
          });

          GlobalEvents.on("PacketReceived:TeleportToLocation", () => {
            this.GameClient.sendPacket("SendAppearing");
            this.GameClient.sendPacket("ValidatePosition", {
              client_x: this.GameClient.ActiveChar.X,
              client_y: this.GameClient.ActiveChar.Y,
              client_z: this.GameClient.ActiveChar.Z,
              client_yaw: this.GameClient.ActiveChar.Heading,
              vehicle_oid: 0,
            });
          });
        })
        .catch((e) => reject(e));
    });
  }
}
