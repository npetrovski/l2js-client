import MMOConfig from "./mmocore/MMOConfig";
import LoginClient from "./network/LoginClient";
import GameClient from "./network/GameClient";
import ProtocolVersion from "./network/serverpackets/ProtocolVersion";
import L2PcInstance from "./model/actor/instance/L2PcInstance";
import { EventHandler, GlobalEvents } from "./mmocore/EventEmitter";

// Commands
import ICommand from "./commands/ICommand";
import AbstractGameCommand from "./commands/AbstractGameCommand";
import CommandSay from "./commands/CommandSay";
import CommandShout from "./commands/CommandShout";
import CommandTell from "./commands/CommandTell";
import CommandSayToParty from "./commands/CommandSayToParty";
import CommandSayToClan from "./commands/CommandSayToClan";
import CommandSayToTrade from "./commands/CommandSayToTrade";
import CommandSayToAlly from "./commands/CommandSayToAlly";
import CommandMoveTo from "./commands/CommandMoveTo";

export class Client {
  private _config: MMOConfig = new MMOConfig();

  private _lc!: LoginClient;

  private _gc!: GameClient;

  private _commands: Record<string, ICommand> = {
    say: new CommandSay(),
    shout: new CommandShout(),
    tell: new CommandTell(),
    sayToParty: new CommandSayToParty(),
    sayToClan: new CommandSayToClan(),
    sayToTrade: new CommandSayToTrade(),
    sayToAlly: new CommandSayToAlly(),

    moveTo: new CommandMoveTo(),
  };

  get Me(): L2PcInstance {
    return this._gc?.ActiveChar;
  }

  constructor() {
    return new Proxy(this, {
      get(target: Client, objectKey: string) {
        if (objectKey in target) {
          return (target as any)[objectKey];
        }
        if (objectKey in target._commands) {
          var cmd = target._commands[objectKey] as AbstractGameCommand<any>;
          cmd.Client = target._gc;
          return (...args: any) => {
            cmd.execute(...args);
          };
        }
      },
    });
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

  on(event: string, handler: EventHandler): Client {
    GlobalEvents.on(event, handler);
    return this;
  }
}
