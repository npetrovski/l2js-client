import SerializablePacket from "../../../mmocore/SerializablePacket";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import MMOSession from "../../../mmocore/MMOSession";
import LoginClient from "../../LoginClient";

export default class LoginOkMutator extends IMMOClientMutator<LoginClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    MMOSession.AccountId = packet.get("account_id") as number;
    MMOSession.AuthKey = packet.get("auth_key") as number;
  }
}
