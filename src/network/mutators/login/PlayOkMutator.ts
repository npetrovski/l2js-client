import SerializablePacket from "../../../mmocore/SerializablePacket";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import MMOSession from "../../../mmocore/MMOSession";
import LoginClient from "../../LoginClient";

export default class PlayOkMutator extends IMMOClientMutator<LoginClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    MMOSession.GameServerSessionId = packet.get("game_server_session_id") as number;
    MMOSession.GameServerAccountId = packet.get("account_id") as number;
  }
}
