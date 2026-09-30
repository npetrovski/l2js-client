import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import KeyPacket from "@network/incoming/game/x2E_KeyPacket";

export default class KeyPacketMutator extends IMMOClientMutator<
  GameClient,
  KeyPacket
> {
  update(packet: KeyPacket): void {
    this.Client.setCryptInitialKey(packet.BlowfishKey);
  }
}
