import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class VersionCheckMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    this.Client.reset();
    const blowfishKey = new Uint8Array(16);
    blowfishKey.set(packet.get("cipher_key_part") as Uint8Array, 0);
    blowfishKey.set(Uint8Array.from([0xc8, 0x27, 0x93, 0x01, 0xa1, 0x6c, 0x31, 0x97]), 8); // the last 8 bytes are static

    this.Client.setKey(blowfishKey);
  }
}
