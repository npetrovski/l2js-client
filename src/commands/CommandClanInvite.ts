import L2Object from "@entities/L2Object";
import RequestJoinPledge from "@network/outgoing/game/x26_RequestJoinPledge";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandClanInvite extends AbstractGameCommand {
  execute(target?: L2Object | number, pledgeType = 0): void {
    const objectId = target instanceof L2Object ? target.ObjectId : target ?? this.GameClient.ActiveChar.Target?.ObjectId;
    if (objectId !== undefined) {
      this.GameClient.sendPacket(new RequestJoinPledge(objectId, pledgeType));
    }
  }
}
