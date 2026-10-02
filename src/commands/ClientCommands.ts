import L2Buff from "@entities/L2Buff";
import L2Character from "@entities/L2Character";
import L2Creature from "@entities/L2Creature";
import L2Item from "@entities/L2Item";
import L2Object from "@entities/L2Object";
import L2Recipe from "@entities/L2Recipe";
import { RestartPoint } from "@enums/RestartPoint";
import { ShotsType } from "@enums/ShotsType";
import Logger from "@mmocore/Logger";
import MMOConfig from "@mmocore/MMOConfig";
import GameClient from "@network/GameClient";
import LoginClient from "@network/LoginClient";
import AbstractGameCommand from "./AbstractGameCommand";
import ICommand from "./ICommand";
import commands from "./index";

export default interface ClientCommands {
  /**
   * Enter or create character Lineage2 world
   * @param config
   */
  enter(
    config?: MMOConfig | Record<string, unknown>,
    newCharData?: L2Character
  ): Promise<{ login: LoginClient; game: GameClient }>;

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
  /**
   * Send logout request
   */
  logout(): void;
  /** Request a trade with a target, defaulting to the active target. */
  tradeRequest(target?: L2Object | number): void;
  /** Accept an incoming trade request. */
  acceptTrade(): void;
  /** Decline an incoming trade request. */
  declineTrade(): void;
  /** Add an inventory item to the active trade. */
  addTradeItem(item: L2Item | number, count?: number): void;
  /** Confirm the active trade. */
  confirmTrade(): void;
  /** Cancel the active trade. */
  cancelTrade(): void;
  /** Destroy an inventory item. */
  destroyItem(item: L2Item | number, count?: number): void;
  /** Crystallize an inventory item. */
  crystallizeItem(item: L2Item | number): void;
  /** Request the current skill list. */
  skills(): void;
  /** Request the current quest list. */
  quests(): void;
  /** Abort a quest by id. */
  abortQuest(questId: number): void;
  /** Invite a target to the clan, defaulting to the active target. */
  clanInvite(target?: L2Object | number, pledgeType?: number): void;
  /** Accept an incoming clan invitation. */
  acceptJoinClan(): void;
  /** Decline an incoming clan invitation. */
  declineJoinClan(): void;
  /** Leave the current clan. */
  leaveClan(): void;
  /** Open the common craft recipe book. */
  commonCraftRecipes(): void;
  /** Request recipe information. */
  recipeInfo(recipe: L2Recipe | number): void;
  /** Delete a recipe from the recipe book. */
  deleteRecipe(recipe: L2Recipe | number): void;
  /** Set a clan nickname/title for a character. */
  giveNickname(target: L2Character | string, nickname: string): void;
  /** Request a chat-link representation of an inventory item. */
  itemLink(item: L2Item | number): void;
  /** Leave the current party. */
  leaveParty(): void;
  /** Remove a member from the current party. */
  oustPartyMember(member?: L2Character | string): void;
  /** Transfer party leadership to a member. */
  changePartyLeader(member?: L2Character | string): void;
  /** Stop movement at the current client position. */
  stopMove(): void;
  /** Toggle between running and walking. */
  runWalk(): void;
  /** Perform the dance social action. */
  socialDance(): void;
  /** Perform the greeting social action. */
  socialGreeting(): void;
  /** Perform the affirmative social action. */
  socialYes(): void;
  /** Invoke the server's unstuck command. */
  unstuck(): void;
  /** Select an object by entity, object id, or known creature name. */
  target(target: L2Object | number | string, shift?: boolean): void;
}

export default abstract class ClientCommands {
  protected readonly logger = Logger.for(this);

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
          target.logger.debug("Command", propertyKey);
          return (...args: any) => cmd.execute(...args);
        }
      },
    });
  }

  registerCommand<Name extends string, Args extends unknown[], Result>(
    commandName: Name,
    commandHandler: {
      execute(this: AbstractGameCommand, ...args: Args): Result;
    }
  ): this & Record<Name, (...args: Args) => Result>;
  registerCommand(commandName: string, commandHandler: ICommand): this {
    if (commandName in this.commands) {
      throw new Error(`Command ${commandName} is already registered.`);
    }
    this.commands[commandName] = commandHandler;
    return this;
  }
}
