import GameClientPacket from "./GameClientPacket";

export default class ExSetCompassZoneCode extends GameClientPacket {
  static readonly ALTEREDZONE: number = 0x08;
  static readonly SIEGEWARZONE1: number = 0x0a;
  static readonly SIEGEWARZONE2: number = 0x0b;
  static readonly PEACEZONE: number = 0x0c;
  static readonly SEVENSIGNSZONE: number = 0x0d;
  static readonly PVPZONE: number = 0x0e;
  static readonly GENERALZONE: number = 0x0f;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _zoneType = this.readD();

    return true;
  }
}
