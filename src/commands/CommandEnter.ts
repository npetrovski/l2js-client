import { EPacketReceived } from "../events/EventTypes";
import { GlobalEvents } from "../mmocore/EventEmitter";
import MMOConfig from "../mmocore/MMOConfig";
import GameClient from "../network/GameClient";
import SystemMessage from "../network/incoming/game/SystemMessage";
import LoginFail from "../network/incoming/login/LoginFail";
import PlayFail from "../network/incoming/login/PlayFail";
import ServerList from "../network/incoming/login/ServerList";
import LoginClient from "../network/LoginClient";
import Appearing from "../network/outgoing/game/Appearing";
import AuthLogin from "../network/outgoing/game/AuthLogin";
import CharacterSelect from "../network/outgoing/game/CharacterSelect";
import EnterWorld from "../network/outgoing/game/EnterWorld";
import ProtocolVersion from "../network/outgoing/game/ProtocolVersion";
import RequestKeyMapping from "../network/outgoing/game/RequestKeyMapping";
import RequestManorList from "../network/outgoing/game/RequestManorList";
import ValidatePosition from "../network/outgoing/game/ValidatePosition";
import AuthGameGuard from "../network/outgoing/login/AuthGameGuard";
import RequestAuthLogin from "../network/outgoing/login/RequestAuthLogin";
import RequestServerList from "../network/outgoing/login/RequestServerList";
import RequestServerLogin from "../network/outgoing/login/RequestServerLogin";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandEnter extends AbstractGameCommand {
  protected _config: MMOConfig = new MMOConfig();

  execute(
    config?: MMOConfig | Record<string, unknown>
  ): Promise<{ login: LoginClient; game: GameClient }> {
    if (config) {
      this._config = { ...new MMOConfig(), ...(config as MMOConfig) };
    }

    return new Promise((resolve, reject) => {
      this.LoginClient.init(this._config);
      this.LoginClient.connect()
        .then(() => {
          GlobalEvents.once("PacketReceived:PlayFail", (e: EPacketReceived) => {
            reject((e.data.packet as PlayFail).FailReason);
          });
          GlobalEvents.once(
            "PacketReceived:LoginFail",
            (e: EPacketReceived) => {
              reject((e.data.packet as LoginFail).FailReason);
            }
          );
          GlobalEvents.once("PacketReceived:Init", () =>
            this.LoginClient.sendPacket(
              new AuthGameGuard(this.LoginClient.Session.sessionId)
            )
          );
          GlobalEvents.once("PacketReceived:GGAuth", () =>
            this.LoginClient.sendPacket(
              new RequestAuthLogin(
                this._config.Username,
                this._config.Password,
                this.LoginClient.Session
              )
            )
          );
          GlobalEvents.once("PacketReceived:LoginOk", () =>
            this.LoginClient.sendPacket(
              new RequestServerList(this.LoginClient.Session)
            )
          );
          GlobalEvents.once(
            "PacketReceived:ServerList",
            (e: EPacketReceived) => {
              this.LoginClient.sendPacket(
                new RequestServerLogin(
                  this.LoginClient.Session,
                  this.LoginClient.ServerId ??
                  (e.data.packet as ServerList).LastServerId
                )
              );
            }
          );
          GlobalEvents.once("PacketReceived:PlayOk", () => {
            this.LoginClient.Connection.close();
            const gameConfig = {
              ...this._config,
              ...{
                Ip: this.LoginClient.Session.server.host,
                Port: this.LoginClient.Session.server.port
              }
            };
            this.GameClient.Session = this.LoginClient.Session;
            this.GameClient.init(gameConfig as MMOConfig);
            this.GameClient.connect()
              .then(() => this.GameClient.sendPacket(new ProtocolVersion()))
              .catch(e => reject(e));
          });
          GlobalEvents.once("PacketReceived:KeyPacket", () =>
            this.GameClient.sendPacket(new AuthLogin(this.GameClient.Session))
          );
          GlobalEvents.once("PacketReceived:CharSelectionInfo", () => {
            setTimeout(() => {
              this.GameClient.sendPacket(
                new CharacterSelect(this.GameClient.Config.CharSlotIndex ?? 0)
              )
            }, 1000);

          }

          );
          GlobalEvents.once("PacketReceived:CharSelected", () => {
            setTimeout(() => {
              this.GameClient.sendPacket(new EnterWorld())
                .catch(e => reject("Enter world fail." + e))
            }, 1000);


          });

          GlobalEvents.on(
            "PacketReceived:SystemMessage",
            (e: EPacketReceived) => {
              if (
                (e.data.packet as SystemMessage).messageId ===
                34 /** WELCOME_TO_LINEAGE */
              ) {
                const param = {
                  login: this.LoginClient,
                  game: this.GameClient
                };
                GlobalEvents.fire("LoggedIn", param);
                resolve(param);
              }
            }
          );

          GlobalEvents.on("PacketReceived:TeleportToLocation", () => {
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
        .catch(e => reject(e));
    });
  }
}
