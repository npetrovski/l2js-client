import MMOClient from "@mmocore/MMOClient";
import ReceivablePacket from "@mmocore/ReceivablePacket";

export default interface IProcessable {
  process(raw: Uint8Array): Promise<ReceivablePacket>;
}
