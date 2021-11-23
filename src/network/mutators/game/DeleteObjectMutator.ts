import SerializablePacket from "../../../mmocore/SerializablePacket";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";

export default class DeleteObjectMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const objectId = packet.get("oid") as number;
    this.Client.CreaturesList.removeByObjectId(objectId);
    this.Client.DroppedItems.removeByObjectId(objectId);
  }
}
