import MMOClient from "./MMOClient";
import ReceivablePacket from "./ReceivablePacket";

export default interface IProcessable {
    process(raw: Uint8Array): Promise<ReceivablePacket<MMOClient>>;
}