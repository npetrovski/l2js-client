import { EventHandler, GlobalEvents } from "./mmocore/EventEmitter";
import L2Buff from "./entities/L2Buff";
import L2Creature from "./entities/L2Creature";
import L2DroppedItem from "./entities/L2DroppedItem";
import L2Item from "./entities/L2Item";
import L2ObjectCollection from "./entities/L2ObjectCollection";
import L2Skill from "./entities/L2Skill";
import L2User from "./entities/L2User";
import L2Recipe from "./entities/L2Recipe";
import GameClient from "./network/GameClient";
import LoginClient from "./network/LoginClient";
import { EventHandlerType } from "./events/EventTypes";
import ClientCommands from "./commands/ClientCommands";

/**
 * Lineage 2 Client main class
 */
export default class Client extends ClientCommands {
  protected LoginClient = new LoginClient();
  protected GameClient = new GameClient();

  get Me(): L2User {
    return this.GameClient.ActiveChar;
  }

  get CreaturesList(): L2ObjectCollection<L2Creature> {
    return this.GameClient.CreaturesList;
  }

  get PartyList(): L2ObjectCollection<L2Creature> {
    return this.GameClient.PartyList;
  }

  get DroppedItems(): L2ObjectCollection<L2DroppedItem> {
    return this.GameClient.DroppedItems;
  }
  get InventoryItems(): L2ObjectCollection<L2Item> {
    return this.GameClient.InventoryItems;
  }
  get BuffsList(): L2ObjectCollection<L2Buff> {
    return this.GameClient.BuffsList;
  }
  get SkillsList(): L2ObjectCollection<L2Skill> {
    return this.GameClient.SkillsList;
  }
  get DwarfRecipeBook(): L2ObjectCollection<L2Recipe> {
    return this.GameClient.DwarfRecipeBook;
  }
  get CommonRecipeBook(): L2ObjectCollection<L2Recipe> {
    return this.GameClient.CommonRecipeBook;
  }

  private ___event_params(
    ...params: EventHandlerType
  ): { type: string; handler: EventHandler } {
    let type: string;
    let handler: any;
    if (params.length >= 3) {
      type = `${params[0]}:${params[1]}`;
      handler = params[2];
    } else {
      type = params[0];
      handler = params[1];
    }

    return { type, handler };
  }

  on(...params: EventHandlerType): this {
    const c = this.___event_params(...params);
    GlobalEvents.on(c.type, c.handler);
    return this;
  }

  once(...params: EventHandlerType): this {
    const c = this.___event_params(...params);
    GlobalEvents.once(c.type, c.handler);
    return this;
  }

  off(...params: EventHandlerType): this {
    const c = this.___event_params(...params);
    GlobalEvents.off(c.type, c.handler);
    return this;
  }
}
