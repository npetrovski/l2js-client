import GameClientPacket from "./GameClientPacket";

export default class ExSetCompassZoneCode extends GameClientPacket {
  static readonly ALTEREDZONE: number = 0x08;
  static readonly SIEGEWARZONE1: number = 0x0A;
  static readonly SIEGEWARZONE2: number = 0x0B;
  static readonly PEACEZONE: number = 0x0C;
  static readonly SEVENSIGNSZONE: number = 0x0D;
  static readonly PVPZONE: number = 0x0E;
  static readonly GENERALZONE: number = 0x0F;


  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();


    const _zoneType = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
