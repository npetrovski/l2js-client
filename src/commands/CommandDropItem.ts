import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandDropItem extends AbstractGameCommand {
  execute(objectId: number, count: number, x?: number, y?: number, z?: number): void {
    const char = this.GameClient?.ActiveChar;
    if (char) {
      const xp = x || char.X;
      const yp = y || char.Y;
      const zp = z || char.Z;

      this.GameClient.sendPacket("RequestDropItem", {
        item_oid: objectId,
        amount: count,
        destination_x: xp,
        destination_y: yp,
        destination_z: zp,
      });
    }
  }
}
