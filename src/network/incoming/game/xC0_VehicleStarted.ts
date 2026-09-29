import GameClientPacket from "./GameClientPacket";

export default class xC0_VehicleStarted extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();
    const _state = this.readD();

    return true;
  }
}
