import SerializablePacket from "../../../mmocore/SerializablePacket";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import MMOSession from "../../../mmocore/MMOSession";
import LoginClient from "../../LoginClient";

export default class GGAuthMutator extends IMMOClientMutator<LoginClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    // this.Client.reset();
  }
}
