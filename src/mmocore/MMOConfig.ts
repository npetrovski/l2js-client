import AbstractPacketStream from "@mmocore/AbstractPacketStream";
import type L2Server from "@entities/L2Server";
import type L2User from "@entities/L2User";

export type PacketStreamConstructor = new (config: MMOConfig) => AbstractPacketStream;

export default class MMOConfig {
  Username = "";
  Password = "";
  ServerId = 1;
  CharSlotIndex = 0;
  Stream: AbstractPacketStream | string | PacketStreamConstructor = "auto";
  Ip = "127.0.0.1";
  Port = 2106;
  /** Base URL of a WebSocket-to-TCP proxy used by browser packet streams. */
  WebSocketUrl?: string;
  /** Optional interactive server picker. Resolves with a server id. */
  SelectServer?: (servers: readonly L2Server[], suggestedServerId: number) => number | Promise<number>;
  /** Optional interactive character picker. Resolves with a zero-based slot. */
  SelectCharacter?: (characters: readonly L2User[], suggestedSlot: number) => number | Promise<number>;
  InitialBlowfishKey?: Uint8Array;
}
