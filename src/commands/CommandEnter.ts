import L2Character from "../entities/L2Character";
import { EPacketReceived } from "../events/EventTypes";
import MMOConfig from "../mmocore/MMOConfig";
import GameClient from "../network/GameClient";
import { x10_CharCreateFail as CharCreateFail, x09_CharSelectionInfo as CharSelectionInfo } from "../network/incoming/game";
import SystemMessage from "../network/incoming/game/x62_SystemMessage";
import LoginFail from "../network/incoming/login/x01_LoginFail";
import PlayFail from "../network/incoming/login/x06_PlayFail";
import ServerList from "../network/incoming/login/x04_ServerList";
import LoginClient from "../network/LoginClient";
import Appearing from "../network/outgoing/game/x3A_Appearing";
import AuthLogin from "../network/outgoing/game/x2B_AuthLogin";
import CharacterCreate from "../network/outgoing/game/x0C_CharacterCreate";
import CharacterSelect from "../network/outgoing/game/x12_CharacterSelect";
import EnterWorld from "../network/outgoing/game/x11_EnterWorld";
import NewCharacter from "../network/outgoing/game/x13_NewCharacter";
import ProtocolVersion from "../network/outgoing/game/x0E_ProtocolVersion";
import RequestKeyMapping from "../network/outgoing/game/xD0_x21_RequestKeyMapping";
import RequestManorList from "../network/outgoing/game/xD0_x01_RequestManorList";
import ValidatePosition from "../network/outgoing/game/x59_ValidatePosition";
import AuthGameGuard from "../network/outgoing/login/x07_AuthGameGuard";
import RequestAuthLogin from "../network/outgoing/login/x00_RequestAuthLogin";
import RequestServerList from "../network/outgoing/login/x05_RequestServerList";
import RequestServerLogin from "../network/outgoing/login/x02_RequestServerLogin";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandEnter extends AbstractGameCommand {
  protected _config: MMOConfig = new MMOConfig();

  execute(
    config?: MMOConfig | Record<string, unknown>,
    charData?: L2Character
  ): Promise<{ login: LoginClient; game: GameClient }> {
    if (config) {
      this._config = { ...new MMOConfig(), ...(config as MMOConfig) };
    }

    return new Promise((resolve, reject) => {
      this.LoginClient.init(this._config);
      this.LoginClient.connect()
        .then(() => {
          this.LoginClient.once("PacketReceived:x06_PlayFail", (e: EPacketReceived) => {
            reject((e.data.packet as PlayFail).FailReason);
          });
          this.LoginClient.once("PacketReceived:x01_LoginFail", (e: EPacketReceived) => {
            reject((e.data.packet as LoginFail).FailReason);
          });
          this.LoginClient.once("PacketReceived:x00_Init", () =>
            this.LoginClient.sendPacket(new AuthGameGuard(this.LoginClient.Session.sessionId))
          );
          this.LoginClient.once("PacketReceived:x0B_GGAuth", () =>
            this.LoginClient.sendPacket(
              new RequestAuthLogin(this._config.Username, this._config.Password, this.LoginClient.Session)
            )
          );
          this.LoginClient.once("PacketReceived:x03_LoginOk", () =>
            this.LoginClient.sendPacket(new RequestServerList(this.LoginClient.Session))
          );
          this.LoginClient.once("PacketReceived:x04_ServerList", (e: EPacketReceived) => {
            this.LoginClient.sendPacket(
              new RequestServerLogin(
                this.LoginClient.Session,
                this.LoginClient.ServerId ?? (e.data.packet as ServerList).LastServerId
              )
            );
          });
          this.LoginClient.once("PacketReceived:x07_PlayOk", () => {
            setTimeout(() => {
              this.LoginClient.Connection.close();
              this.LoginClient.offAll();
              // this.LoginClient = null;
            }, 0);
            const gameConfig = {
              ...this._config,
              ...{
                Ip: this.LoginClient.Session.server.host,
                Port: this.LoginClient.Session.server.port,
              },
            };
            this.GameClient.Session = this.LoginClient.Session;
            this.GameClient.init(gameConfig as MMOConfig);
            this.GameClient.connect()
              .then(() => this.GameClient.sendPacket(new ProtocolVersion()))
              .catch((e) => reject(e));
          });

          this.GameClient.once("PacketReceived:x2E_KeyPacket", () =>
            this.GameClient.sendPacket(new AuthLogin(this.GameClient.Session))
          );

          if (charData) {
            let sizeChar = 0;
            this.GameClient.once("PacketReceived:x09_CharSelectionInfo", (e: EPacketReceived) => {
              sizeChar = (e.data.packet as CharSelectionInfo).characterPackagesSize;
              this.GameClient.sendPacket(new NewCharacter());
            });

            this.GameClient.once("PacketReceived:x0D_NewCharacterSuccess", (e: EPacketReceived) =>
              this.GameClient.sendPacket(new CharacterCreate(charData))
            );

            this.GameClient.once("PacketReceived:x0F_CharCreateOk", (e: EPacketReceived) =>
              this.GameClient.sendPacket(new CharacterSelect(sizeChar ?? 0))
            );

            this.GameClient.once("PacketReceived:x10_CharCreateFail", (e: EPacketReceived) =>
              reject((e.data.packet as CharCreateFail).FailReason)
            );
          } else {
            this.GameClient.once("PacketReceived:x09_CharSelectionInfo", () =>
              this.GameClient.sendPacket(new CharacterSelect(this.GameClient.Config.CharSlotIndex ?? 0))
            );
          }

          this.GameClient.once("PacketReceived:x0B_CharSelected", () => {
            this.GameClient.sendPacket(new RequestManorList())
              .then(() => this.GameClient.sendPacket(new RequestKeyMapping()))
              .then(() => this.GameClient.sendPacket(new EnterWorld()))
              .catch((e) => reject("Enter world fail." + e));
          });

          this.GameClient.on("PacketReceived:x62_SystemMessage", (e: EPacketReceived) => {
            if ((e.data.packet as SystemMessage).messageId === 34 /** WELCOME_TO_LINEAGE */) {
              const param = {
                login: this.LoginClient,
                game: this.GameClient,
              };
              this.GameClient.fire("LoggedIn", param);
              resolve(param);
            }
          });

          this.GameClient.on("PacketReceived:x22_TeleportToLocation", () => {
            this.GameClient.sendPacket(new Appearing());
            this.GameClient.sendPacket(
              new ValidatePosition(
                this.GameClient.ActiveChar.X,
                this.GameClient.ActiveChar.Y,
                this.GameClient.ActiveChar.Z,
                this.GameClient.ActiveChar.Heading,
                0
              )
            );
          });
        })
        .catch((e) => reject(e));
    });
  }
}
