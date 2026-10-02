import L2Object from "@entities/L2Object";
import Action from "@network/outgoing/game/x1F_Action";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandTarget extends AbstractGameCommand {
  execute(target: L2Object | number | string, shift = false): void {
    const object = typeof target === "string" ? this.GameClient.CreaturesList.getEntryByName(target) : target;
    const objectId = object instanceof L2Object ? object.ObjectId : object;
    const character = this.GameClient.ActiveChar;

    if (typeof objectId === "number") {
      this.GameClient.sendPacket(new Action(objectId, character.X, character.Y, character.Z, shift));
    }
  }
}
