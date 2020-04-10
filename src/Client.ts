import MMOConfig from "./mmocore/MMOConfig";
import LoginClient from "./network/LoginClient";
import GameClient from "./network/GameClient";
import ProtocolVersion from "./network/serverpackets/ProtocolVersion";
import L2PcInstance from "./model/actor/instance/L2PcInstance";
import { EventHandler, GlobalEvents } from "./mmocore/EventEmitter";

export class Client {
  private _config: MMOConfig = new MMOConfig();

  private _lc!: LoginClient;

  private _gc!: GameClient;

  get Me(): L2PcInstance {
    return this._gc?.ActiveChar;
  }

  setConfig(config: MMOConfig | object): Client {
    this._config.assign(config);
    return this;
  }

  enter(config?: MMOConfig | object): Client {
    if (config) {
      this.setConfig(config);
    }

    this._lc = new LoginClient(this._config, () => {
      this._gc = new GameClient(this._lc, this._config);
      this._gc.sendPacket(new ProtocolVersion());
    });

    return this;
  }

  on(event: string, handler: EventHandler) {
    GlobalEvents.on(event, handler);
  }
}
