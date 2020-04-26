import IPacketHandler from "../mmocore/IPacketHandler";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import AbnormalStatusUpdate from "./clientpackets/AbnormalStatusUpdate";
import AskJoinParty from "./clientpackets/AskJoinParty";
import Attack from "./clientpackets/Attack";
import AutoAttackStart from "./clientpackets/AutoAttackStart";
import AutoAttackStop from "./clientpackets/AutoAttackStop";
import ChangeMoveType from "./clientpackets/ChangeMoveType";
import CharInfo from "./clientpackets/CharInfo";
import CharSelected from "./clientpackets/CharSelected";
import CharSelectionInfo from "./clientpackets/CharSelectionInfo";
import CreatureSay from "./clientpackets/CreatureSay";
import DeleteObject from "./clientpackets/DeleteObject";
import Die from "./clientpackets/Die";
import DropItem from "./clientpackets/DropItem";
import EquipUpdate from "./clientpackets/EquipUpdate";
import EtcStatusUpdate from "./clientpackets/EtcStatusUpdate";
import ExBrExtraUserInfo from "./clientpackets/ExBrExtraUserInfo";
import ExDuelAskStart from "./clientpackets/ExDuelAskStart";
import ExQuestItemList from "./clientpackets/ExQuestItemList";
import ExRedSky from "./clientpackets/ExRedSky";
import ExVoteSystemInfo from "./clientpackets/ExVoteSystemInfo";
import ItemList from "./clientpackets/ItemList";
import JoinParty from "./clientpackets/JoinParty";
import KeyPacket from "./clientpackets/KeyPacket";
import MoveToLocation from "./clientpackets/MoveToLocation";
import MoveToPawn from "./clientpackets/MoveToPawn";
import MyTargetSelected from "./clientpackets/MyTargetSelected";
import NpcInfo from "./clientpackets/NpcInfo";
import NpcQuestHtmlMessage from "./clientpackets/NpcQuestHtmlMessage";
import NpcSay from "./clientpackets/NpcSay";
import PartyMemberPosition from "./clientpackets/PartyMemberPosition";
import PartySmallWindowAdd from "./clientpackets/PartySmallWindowAdd";
import PartySmallWindowAll from "./clientpackets/PartySmallWindowAll";
import PartySmallWindowDelete from "./clientpackets/PartySmallWindowDelete";
import PartySmallWindowDeleteAll from "./clientpackets/PartySmallWindowDeleteAll";
import PartySmallWindowUpdate from "./clientpackets/PartySmallWindowUpdate";
import PetDelete from "./clientpackets/PetDelete";
import RelationChanged from "./clientpackets/RelationChanged";
import Revive from "./clientpackets/Revive";
import ShortCutInit from "./clientpackets/ShortCutInit";
import SkillCoolTime from "./clientpackets/SkillCoolTime";
import SkillList from "./clientpackets/SkillList";
import Snoop from "./clientpackets/Snoop";
import SocialAction from "./clientpackets/SocialAction";
import SpawnItem from "./clientpackets/SpawnItem";
import SSQInfo from "./clientpackets/SSQInfo";
import StaticObject from "./clientpackets/StaticObject";
import StatusUpdate from "./clientpackets/StatusUpdate";
import StopMove from "./clientpackets/StopMove";
import StopRotation from "./clientpackets/StopRotation";
import SunRise from "./clientpackets/SunRise";
import SunSet from "./clientpackets/SunSet";
import SystemMessage from "./clientpackets/SystemMessage";
import TargetSelected from "./clientpackets/TargetSelected";
import TargetUnselected from "./clientpackets/TargetUnselected";
import TeleportToLocation from "./clientpackets/TeleportToLocation";
import TutorialEnableClientEvent from "./clientpackets/TutorialEnableClientEvent";
import TutorialShowQuestionMark from "./clientpackets/TutorialShowQuestionMark";
import UserInfo from "./clientpackets/UserInfo";
import ValidateLocation from "./clientpackets/ValidateLocation";
import GameClient from "./GameClient";

export default class GamePacketHandler implements IPacketHandler<GameClient> {
  // @Override
  handlePacket(data: Uint8Array, client: GameClient): ReceivablePacket<GameClient> {
    const opcode: number = data[0] & 0xff;

    let rpk!: ReceivablePacket<GameClient>;

    try {
      switch (opcode) {
        case 0x00:
          rpk = new Die();
          break;
        case 0x01:
          rpk = new Revive();
          break;
        case 0x05:
          rpk = new SpawnItem();
          break;
        case 0x08:
          rpk = new DeleteObject();
          break;
        case 0x11:
          rpk = new ItemList();
          break;
        case 0x12:
          rpk = new SunRise();
          break;
        case 0x13:
          rpk = new SunSet();
          break;
        case 0x18:
          rpk = new StatusUpdate();
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
        case 0x25:
          rpk = new AutoAttackStart();
          break;
        case 0x26:
          rpk = new AutoAttackStop();
          break;
        case 0x27:
          rpk = new SocialAction();
          break;
        case 0x28:
          rpk = new ChangeMoveType();
          break;
        case 0x2f:
          rpk = new MoveToLocation();
          break;
        case 0x30:
          rpk = new NpcSay();
          break;
        case 0x31:
          rpk = new CharInfo();
          break;
        case 0x32:
          rpk = new UserInfo();
          break;
        case 0x33:
          rpk = new Attack();
          break;
        case 0x39:
          rpk = new AskJoinParty();
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
        case 0x4e:
          rpk = new PartySmallWindowAll();
          break;
        case 0x4f:
          rpk = new PartySmallWindowAdd();
          break;
        case 0x50:
          rpk = new PartySmallWindowDeleteAll();
          break;
        case 0x51:
          rpk = new PartySmallWindowDelete();
          break;
        case 0x52:
          rpk = new PartySmallWindowUpdate();
          break;
        case 0x5f:
          rpk = new SkillList();
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
        case 0x79:
          rpk = new ValidateLocation();
          break;
        case 0x85:
          rpk = new AbnormalStatusUpdate();
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
        case 0xba:
          rpk = new PartyMemberPosition();
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
          const sub = data[1] + (data[2] << 8);
          switch (sub) {
            case 0x41:
              rpk = new ExRedSky();
              break;
            case 0x4c:
              rpk = new ExDuelAskStart();
              break;
            case 0x8d:
              rpk = new NpcQuestHtmlMessage();
              break;
            case 0xc6:
              rpk = new ExQuestItemList();
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
