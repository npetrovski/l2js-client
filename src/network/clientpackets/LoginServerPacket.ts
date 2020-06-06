import SendablePacket from "../../mmocore/SendablePacket";
import LoginClient from "../LoginClient";

export default abstract class LoginServerPacket extends SendablePacket<LoginClient> {}
