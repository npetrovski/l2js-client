import MMOSession from "../../mmocore/MMOSession";
import GameServerPacket from "./GameServerPacket";

export default class AuthLogin extends GameServerPacket {

  constructor(private session: MMOSession) {
    super();
  }

  write(): void {
    this.writeC(0x08);
    this.writeS(this.session.username);
    this.writeD(this.session.accountId);
    this.writeD(this.session.gsSessionId);
    this.writeD(this.session.gsAccountId);
    this.writeD(this.session.authKey);
  }
}
