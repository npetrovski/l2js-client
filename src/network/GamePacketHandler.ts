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
import NpcInfo from "./clientpackets/NpcInfo";
import EtcStatusUpdate from "./clientpackets/EtcStatusUpdate";
import StopMove from "./clientpackets/StopMove";
import Snoop from "./clientpackets/Snoop";
import MoveToPawn from "./clientpackets/MoveToPawn";
import JoinParty from "./clientpackets/JoinParty";
import ShortCutInit from "./clientpackets/ShortCutInit";
import DropItem from "./clientpackets/DropItem";
import Die from "./clientpackets/Die";
import EquipUpdate from "./clientpackets/EquipUpdate";
import SkillCoolTime from "./clientpackets/SkillCoolTime";
import TutorialShowQuestionMark from "./clientpackets/TutorialShowQuestionMark";
import TutorialEnableClientEvent from "./clientpackets/TutorialEnableClientEvent";
import NpcQuestHtmlMessage from "./clientpackets/NpcQuestHtmlMessage";
import ExVoteSystemInfo from "./clientpackets/ExVoteSystemInfo";
import TargetSelected from "./clientpackets/TargetSelected";
import TargetUnselected from "./clientpackets/TargetUnselected";
import TeleportToLocation from "./clientpackets/TeleportToLocation";
import SunSet from "./clientpackets/SunSet";
import SunRise from "./clientpackets/SunRise";
import StopRotation from "./clientpackets/StopRotation";
import UserInfo from "./clientpackets/UserInfo";
import ExBrExtraUserInfo from "./clientpackets/ExBrExtraUserInfo";
import RelationChanged from "./clientpackets/RelationChanged";
import MyTargetSelected from "./clientpackets/MyTargetSelected";
import StaticObject from "./clientpackets/StaticObject";

export default class GamePacketHandler implements IPacketHandler<GameClient> {
  //@Override
  handlePacket(data: Uint8Array, client: GameClient): ReceivablePacket<GameClient> {
    var opcode: number = data[0] & 0xff;

    var rpk!: ReceivablePacket<GameClient>;

    try {
      switch (opcode) {
        case 0x00:
          rpk = new Die();
          break;
        case 0x08:
          rpk = new DeleteObject();
          break;
        case 0x12:
          rpk = new SunRise();
          break;
        case 0x13:
          rpk = new SunSet();
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
        case 0x16:
          rpk = new DropItem();
          break;
        case 0x22:
          rpk = new TeleportToLocation();
          break;
        case 0x23:
          rpk = new TargetSelected();
          break;
        case 0x24:
          rpk = new TargetUnselected();
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
        case 0x32:
          rpk = new UserInfo();
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
        case 0x4b:
          rpk = new EquipUpdate();
          break;
        case 0x61:
          rpk = new StopRotation();
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
        case 0x9f:
          rpk = new StaticObject();
          break;
        case 0xa7:
          rpk = new TutorialShowQuestionMark();
          break;
        case 0xa8:
          rpk = new TutorialEnableClientEvent();
          break;
        case 0xb7:
          rpk = new PetDelete();
          break;
        case 0xb9:
          rpk = new MyTargetSelected();
          break;
        case 0xc7:
          rpk = new SkillCoolTime();
          break;
        case 0xce:
          rpk = new RelationChanged();
          break;
        case 0xdb:
          rpk = new Snoop();
          break;
        case 0xf9:
          rpk = new EtcStatusUpdate();
          break;
        case 0xfe:
          let sub = data[1] + (data[2] << 8);
          switch (sub) {
            case 0x8d:
              rpk = new NpcQuestHtmlMessage();
              break;
            case 0xc9:
              rpk = new ExVoteSystemInfo();
              break;
            case 0xda:
              rpk = new ExBrExtraUserInfo();
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
          }
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
