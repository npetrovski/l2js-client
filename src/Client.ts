import MMOConfig from "./mmocore/MMOConfig";
import LoginClient from "./network/LoginClient";
import GameClient from "./network/GameClient";
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
import CommandHit from "./commands/CommandHit";
import L2User from "./entities/L2User";
import L2ObjectCollection from "./entities/L2ObjectCollection";
import L2Creature from "./entities/L2Creature";
import CommandCancelTarget from "./commands/CommandCancelTarget";
import CommandAcceptJoinParty from "./commands/CommandAcceptJoinParty";
import CommandDeclineJoinParty from "./commands/CommandDeclineJoinParty";
import L2DroppedItem from "./entities/L2DroppedItem";
import L2Character from "./entities/L2Character";
import CommandNextTarget from "./commands/CommandNextTarget";

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
    hit: new CommandHit(),

    cancelTarget: new CommandCancelTarget(),

    acceptJoinParty: new CommandAcceptJoinParty(),
    declineJoinParty: new CommandDeclineJoinParty(),

    nextTarget: new CommandNextTarget(),
  };

  get Me(): L2User {
    return this._gc?.ActiveChar;
  }

  get CreaturesList(): L2ObjectCollection<L2Creature> {
    return this._gc?.CreaturesList;
  }

  get PartyList(): L2ObjectCollection<L2Creature> {
    return this._gc?.PartyList;
  }

  get DroppedItems(): L2ObjectCollection<L2DroppedItem> {
    return this._gc?.DroppedItems;
  }

  constructor() {
    return new Proxy<Client>(this, {
      get(target: Client, propertyKey: string, receiver: any) {
        if (propertyKey in target) {
          // return (target as any)[objectKey];
          return Reflect.get(target, propertyKey, receiver);
        }
        if (propertyKey in target._commands) {
          const cmd = target._commands[propertyKey] as AbstractGameCommand<any>;
          cmd.Client = target._gc;
          return (...args: any) => {
            return cmd.execute(...args);
          };
        }
      },
    });
  }

  setConfig(config: MMOConfig | object): this {
    this._config.assign(config);
    return this;
  }

  enter(config?: MMOConfig | object): this {
    if (config) {
      this.setConfig(config);
    }

    this._lc = new LoginClient(this._config, () => {
      this._gc = new GameClient(this._lc, this._config);
    });

    return this;
  }

  on(event: string, handler: EventHandler): this {
    GlobalEvents.on(event, handler);
    return this;
  }
}
