import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import KeyPacket from "../../incoming/game/KeyPacket";


export default class KeyPacketMutator extends IMMOClientMutator<
  GameClient,
  KeyPacket
> {
  update(packet: KeyPacket): void {
    this.Client.setCryptInitialKey(packet.BlowfishKey);
  }
}
