import ReceivablePacket from "@mmocore/ReceivablePacket";

export type PacketConstructor = new () => ReceivablePacket;

const gamePackets = new Map<number, PacketConstructor>();
const extendedGamePackets = new Map<number, PacketConstructor>();
const loginPackets = new Map<number, PacketConstructor>();

function registerPacket(
  registry: Map<number, PacketConstructor>,
  opcode: number,
  packetClass: PacketConstructor,
  label: string
): void {
  const registeredClass = registry.get(opcode);

  if (registeredClass) {
    throw new Error(
      `Duplicate ${label} packet registration for 0x${opcode.toString(16)}: ` +
        `${registeredClass.name} and ${packetClass.name}`
    );
  }

  registry.set(opcode, packetClass);
}

export function GamePacket(opcode: number, subOpcode?: number) {
  return <T extends PacketConstructor>(packetClass: T): T => {
    if (subOpcode === undefined) {
      registerPacket(gamePackets, opcode, packetClass, "game");
    } else {
      registerPacket(extendedGamePackets, subOpcode, packetClass, `extended game 0x${opcode.toString(16)}`);
    }

    return packetClass;
  };
}

export function LoginPacket(opcode: number) {
  return <T extends PacketConstructor>(packetClass: T): T => {
    registerPacket(loginPackets, opcode, packetClass, "login");
    return packetClass;
  };
}

export function findGamePacket(opcode: number, subOpcode?: number): PacketConstructor | undefined {
  return subOpcode === undefined ? gamePackets.get(opcode) : extendedGamePackets.get(subOpcode);
}

export function findLoginPacket(opcode: number): PacketConstructor | undefined {
  return loginPackets.get(opcode);
}
