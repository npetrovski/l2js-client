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
import L2Npc from "./model/actor/L2Npc";
import CommandHit from "./commands/CommandHit";
import L2ObjectCollection from "./model/L2ObjectCollection";

export class Client {
  private _config: MMOConfig = new MMOConfig();

  private _lc!: LoginClient;

  private _gc!: GameClient;

  private _entered: boolean = false;

  private _commands: Record<string, ICommand> = {
    say: new CommandSay(),
    shout: new CommandShout(),
    tell: new CommandTell(),
    sayToParty: new CommandSayToParty(),
    sayToClan: new CommandSayToClan(),
    sayToTrade: new CommandSayToTrade(),
    sayToAlly: new CommandSayToAlly(),

    moveTo: new CommandMoveTo(),
    hit: new CommandHit(),
  };

  get Entered(): boolean {
    return this._entered;
  }

  get Me(): L2PcInstance {
    return this._gc?.ActiveChar;
  }

  get CreaturesList(): L2ObjectCollection<L2Npc> {
    return this._gc?.CreaturesList;
  }

  constructor() {
    return new Proxy<Client>(this, {
      get(target: Client, propertyKey: string, receiver: any) {
        if (propertyKey in target) {
          //return (target as any)[objectKey];
          return Reflect.get(target, propertyKey, receiver);
        }
        if (propertyKey in target._commands) {
          var cmd = target._commands[propertyKey] as AbstractGameCommand<any>;
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
      this._entered = true;
    });

    return this;
  }

  on(event: string, handler: EventHandler): Client {
    GlobalEvents.on(event, handler);
    return this;
  }
}
