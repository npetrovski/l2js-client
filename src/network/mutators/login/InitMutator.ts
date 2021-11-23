import SerializablePacket from "../../../mmocore/SerializablePacket";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import MMOSession from "../../../mmocore/MMOSession";
import LoginClient from "../../LoginClient";

export default class InitMutator extends IMMOClientMutator<LoginClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    this.Client.reset();

    // Session
    MMOSession.SessionId = packet.get("session_id") as number;
    MMOSession.PublicKey = this.unscrambleModulus(packet.get("rsa_scrambled_modulus") as Uint8Array);

    // Blowfish key
    this.Client.setKey(packet.get("blowfish_key") as Uint8Array);
  }

  private unscrambleModulus(mods: Uint8Array): Uint8Array {
    for (let i = 0; i < 0x40; i++) {
      mods[0x40 + i] = mods[0x40 + i] ^ mods[i];
    }
    // step 3 : xor bytes 0x0d-0x10 with bytes 0x34-0x38
    for (let i = 0; i < 4; i++) {
      mods[0x0d + i] = mods[0x0d + i] ^ mods[0x34 + i];
    }
    // step 2 : xor first 0x40 bytes with  last 0x40 bytes
    for (let i = 0; i < 0x40; i++) {
      mods[i] = mods[i] ^ mods[0x40 + i];
    }
    // step 1 : 0x4d-0x50 <-> 0x00-0x04
    for (let i = 0; i < 4; i++) {
      const temp: number = mods[0x00 + i];
      mods[0x00 + i] = mods[0x4d + i];
      mods[0x4d + i] = temp;
    }

    return mods;
  }
}
