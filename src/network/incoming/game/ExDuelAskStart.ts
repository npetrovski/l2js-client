import GameClientPacket from "./GameClientPacket";

export default class ExDuelAskStart extends GameClientPacket {

  RequestorName: string = "";
  PartyDuel: number = 0;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.RequestorName = this.readS();
    this.PartyDuel = this.readD();

    return true;
  }
}
