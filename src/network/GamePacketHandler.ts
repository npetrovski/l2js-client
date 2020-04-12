import IPacketHandler from "../mmocore/IPacketHandler";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import GameClient from "./GameClient";
import KeyPacket from "./clientpackets/KeyPacket";
import CharSelectionInfo from "./clientpackets/CharSelectionInfo";
import SystemMessage from "./clientpackets/SystemMessage";
import CreatureSay from "./clientpackets/CreatureSay";
import CharSelected from "./clientpackets/CharSelected";
import SSQInfo from "./clientpackets/SSQInfo";
import SocialAction from "./clientpackets/SocialAction";
import PetDelete from "./clientpackets/PetDelete";
import MoveToLocation from "./clientpackets/MoveToLocation";
import NpcSay from "./clientpackets/NpcSay";
import DeleteObject from "./clientpackets/DeleteObject";
import VersionCheck from "./clientpackets/VersionCheck";
import NpcInfo from "./clientpackets/NpcInfo";
import EtcStatusUpdate from "./clientpackets/EtcStatusUpdate";
import StopMove from "./clientpackets/StopMove";
import Snoop from "./clientpackets/Snoop";
import MoveToPawn from "./clientpackets/MoveToPawn";
import JoinParty from "./clientpackets/JoinParty";
import ShortCutInit from "./clientpackets/ShortCutInit";

export default class GamePacketHandler implements IPacketHandler<GameClient> {
  //@Override
  handlePacket(data: Uint8Array, client: GameClient): ReceivablePacket<GameClient> {
    var opcode: number = data[0] & 0xff;

    var rpk!: ReceivablePacket<GameClient>;

    try {
      switch (opcode) {
        case 0x08:
          rpk = new DeleteObject();
          break;
        case 0x2e:
          rpk = new KeyPacket();
          break;
        case 0x09:
          rpk = new CharSelectionInfo();
          break;
        case 0x0b:
          rpk = new CharSelected();
          break;
        case 0x0c:
          rpk = new NpcInfo();
          break;
        case 0x27:
          rpk = new SocialAction();
          break;
        case 0x2f:
          rpk = new MoveToLocation();
          break;
        case 0x30:
          rpk = new NpcSay();
          break;
        case 0x3a:
          rpk = new JoinParty();
          break;
        case 0x45:
          rpk = new ShortCutInit();
          break;
        case 0x47:
          rpk = new StopMove();
          break;
        case 0x4a:
          rpk = new CreatureSay();
          break;
        case 0x62:
          rpk = new SystemMessage();
          break;
        case 0x72:
          rpk = new MoveToPawn();
          break;
        case 0x73:
          rpk = new SSQInfo();
          break;
        case 0xb7:
          rpk = new PetDelete();
          break;
        case 0xdb:
          rpk = new Snoop();
          break;
        case 0xf9:
          rpk = new EtcStatusUpdate();
          break;
        default:
          if (data.byteLength > 2) {
            console.log(
              "Unknown game packet received. [0x" +
                opcode.toString(16) +
                " 0x" +
                data[1].toString(16) +
                "] len=" +
                data.byteLength
            );
          }

          return rpk;
        //throw Error("Unknown game packet received." + opcode);
      }

      rpk.Client = client;
      rpk.Buffer = data;
    } catch (err) {
      console.log(err);
    }
    if (rpk) console.log("processing...", rpk.constructor.name);
    return rpk;
  }
}
