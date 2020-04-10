import ReceivablePacket from "../../mmocore/ReceivablePacket";
import GameClient from "../GameClient";

export default abstract class GameClientPacket extends ReceivablePacket<GameClient> {
  // @Override
  read(): boolean {
    try {
      return this.readImpl();
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  abstract readImpl(): boolean;
}
