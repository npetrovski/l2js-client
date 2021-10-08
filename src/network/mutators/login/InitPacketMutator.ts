import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import Init from "../../incoming/login/Init";
import LoginClient from "../../LoginClient";

export default class InitPacketMutator extends IMMOClientMutator<
  LoginClient,
  Init
> {
  update(packet: Init): void {
    // Session
    this.Client.Session.sessionId = packet.SessionId;
    this.Client.Session.publicKey = packet.PublicKey;

    // Blowfish key
    this.Client.BlowfishKey = packet.BlowfishKey;
  }
}
