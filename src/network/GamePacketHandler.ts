import IPacketHandler from "@mmocore/IPacketHandler";
import Logger from "@mmocore/Logger";
import ReceivablePacket from "@mmocore/ReceivablePacket";
import GameClient from "@network/GameClient";
import "@network/incoming/game/index";
import RawGamePacket from "@network/incoming/game/RawGamePacket";
import { findGamePacket } from "@network/PacketRegistry";
import { EXTENDED_SERVER_PACKET_NAMES, SERVER_PACKET_NAMES } from "@network/ServerPacketNames";

export default class GamePacketHandler implements IPacketHandler<GameClient> {
  protected readonly logger = Logger.for(this);

  // @Override
  handlePacket(data: Uint8Array): ReceivablePacket {
    const opcode = data[0] & 0xff;
    const subOpcode = opcode === 0xfe && data.byteLength >= 3 ? data[1] | (data[2] << 8) : undefined;

    let rpk!: ReceivablePacket;

    try {
      const PacketClass = findGamePacket(opcode, subOpcode);

      if (PacketClass) {
        rpk = new PacketClass();
      } else {
        const packetNames =
          subOpcode === undefined ? SERVER_PACKET_NAMES[opcode] : EXTENDED_SERVER_PACKET_NAMES[subOpcode];

        if (packetNames) {
          rpk = new RawGamePacket(opcode, packetNames, subOpcode);
        }
      }

      if (!rpk) {
        if (data.byteLength > 2) {
          this.logger.debug(
            "Unknown game packet received. [0x" +
              opcode.toString(16) +
              " 0x" +
              data[1].toString(16) +
              "] len=" +
              data.byteLength
          );
        } else {
          this.logger.debug("Unknown game packet received.");
        }
      } else {
        rpk.Buffer = data;
      }
    } catch (err) {
      this.logger.error(err);
    }

    return rpk;
  }
}
