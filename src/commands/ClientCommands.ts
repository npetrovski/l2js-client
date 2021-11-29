import L2Buff from "../entities/L2Buff";
import L2Character from "../entities/L2Character";
import L2Creature from "../entities/L2Creature";
import L2Item from "../entities/L2Item";
import L2Object from "../entities/L2Object";
import { RestartPoint } from "../enums/RestartPoint";
import { ShotsType } from "../enums/ShotsType";
import MMOConfig from "../mmocore/MMOConfig";
import GameClient from "../network/GameClient";
import LoginClient from "../network/LoginClient";
import AbstractGameCommand from "./AbstractGameCommand";
import ICommand from "./ICommand";
import commands from "./index";

export default interface ClientCommands {
  /**
   * Enter Lineage2 world
   * @param config
   */
  enter(config?: MMOConfig | Record<string, unknown>): Promise<{ login: LoginClient; game: GameClient }>;
  /**
   * Send a general message
   * @param text
   */
  say(text: string): void;
  /**
   * Shout a message
   * @param text
   */
  shout(text: string): void;
  /**
   * Send a PM
   * @param text
   * @param target
   */
  tell(text: string, target: string): void;
  /**
   * Send message to party
   * @param text
   */
  sayToParty(text: string): void;
  /**
   * Send message to clan
   * @param text
   */
  sayToClan(text: string): void;
  /**
   * Send message to trade
   * @param text
   */
  sayToTrade(text: string): void;
  /**
   * Send message to ally
   * @param text
   */
  sayToAlly(text: string): void;
  /**
   * Move to location
   * @param x
   * @param y
   * @param z
   */
  moveTo(x: number, y: number, z: number): void;
  /**
   * Drop an item at location
   * @param ItemObjectId
   * @param ItemsCount
   * @param x
   * @param y
   * @param z
   */
  dropItem(objectId: number, count: number, x?: number, y?: number, z?: number): void;
  /**
   * Hit on target. Accepts L2Object object or ObjectId
   * @param object
   * @param shift
   */
  hit(object: L2Object | number, shift?: boolean): void;
  /**
   * Attack a target
   * @param object
   * @param shift
   */
  attack(object: L2Object | number, shift?: boolean): void;
  /**
   * Cancel the active target
   */
  cancelTarget(): void;
  /**
   * Accepts the requested party invite
   */
  acceptJoinParty(): void;
  /**
   * Declines the requested party invite
   */
  declineJoinParty(): void;
  /**
   * Select next/closest attackable target
   */
  nextTarget(): L2Creature | undefined;
  /**
   * Request for inventory item list
   */
  inventory(): void;
  /**
   * Use an item. Accepts L2Item object or ObjectId
   * @param item
   */
  useItem(item: L2Item | number): void;
  /**
   * Request player a duel. If no char is provided, the command tries to request the selected target
   * @param char
   */
  requestDuel(char?: L2Character | string): void;
  /**
   * Enable/disable auto-shots
   * @param item
   * @param enable
   */
  autoShots(item: L2Item | ShotsType | number, enable: boolean): void;
  /**
   * Cancel a buff
   * @param object
   * @param buff
   * @param level
   */
  cancelBuff(object: L2Character | number, buff: L2Buff | number, level?: number): void;
  /**
   * Sit or stand
   */
  sitOrStand(): void;
  /**
   * Sync position with server
   */
  validatePosition(): void;
  /**
   * Cast a magic skill
   * @param magicId
   * @param ctrl
   * @param shift
   */
  cast(magicSkillId: number, ctrl?: boolean, shift?: boolean): void;
  /**
   * Open dwarven craft recipe book
   */
  dwarvenCraftRecipes(): void;
  /**
   * Craft an item
   * @param recipeId
   */
  craft(recipeId: number): void;
  /**
   * Revive to location
   * @param where
   */
  revive(where: RestartPoint): void;
  /**
   * Accept resurrect request
   */
  acceptResurrect(): void;
  /**
   * Decline resurrect request
   */
  declineResurrect(): void;
  /**
   * Send Party Request
   */
  partyInvite(charOrCharName?: L2Character | string): void;
  /**
   * Send bypass to server. (dialog)
   */
  dialog(text: string): void;
}

export default abstract class ClientCommands {
  LoginClient = new LoginClient();

  GameClient = new GameClient();

  protected commands: Record<string, ICommand> = commands;
  constructor() {
    return new Proxy<ClientCommands>(this, {
      get(target: ClientCommands, propertyKey: string, receiver: any) {
        if (propertyKey in target) {
          // return (target as any)[objectKey];
          return Reflect.get(target, propertyKey, receiver);
        }
        if (propertyKey in commands) {
          const cmd = Object.create((commands as any)[propertyKey] as AbstractGameCommand, {
            LoginClient: { value: (target as any).LoginClient },
            GameClient: { value: (target as any).GameClient },
          });
          return (...args: any) => cmd.execute(...args);
        }
      },
    });
  }

  registerCommand(commandName: string, commandHandler: ICommand): this {
    if (commandName in this.commands) {
      throw new Error(`Command ${commandName} is already registered.`);
    }
    this.commands[commandName] = commandHandler;
    return this;
  }
}
