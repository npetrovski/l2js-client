import IPacketHandler from "../mmocore/IPacketHandler";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import AbnormalStatusUpdate from "./serverpackets/AbnormalStatusUpdate";
import AskJoinParty from "./serverpackets/AskJoinParty";
import Attack from "./serverpackets/Attack";
import AutoAttackStart from "./serverpackets/AutoAttackStart";
import AutoAttackStop from "./serverpackets/AutoAttackStop";
import ChangeMoveType from "./serverpackets/ChangeMoveType";
import CharInfo from "./serverpackets/CharInfo";
import CharSelected from "./serverpackets/CharSelected";
import CharSelectionInfo from "./serverpackets/CharSelectionInfo";
import CreatureSay from "./serverpackets/CreatureSay";
import DeleteObject from "./serverpackets/DeleteObject";
import Die from "./serverpackets/Die";
import DropItem from "./serverpackets/DropItem";
import EquipUpdate from "./serverpackets/EquipUpdate";
import EtcStatusUpdate from "./serverpackets/EtcStatusUpdate";
import ExBrExtraUserInfo from "./serverpackets/ExBrExtraUserInfo";
import ExDuelAskStart from "./serverpackets/ExDuelAskStart";
import ExQuestItemList from "./serverpackets/ExQuestItemList";
import ExRedSky from "./serverpackets/ExRedSky";
import ExVoteSystemInfo from "./serverpackets/ExVoteSystemInfo";
import ItemList from "./serverpackets/ItemList";
import JoinParty from "./serverpackets/JoinParty";
import KeyPacket from "./serverpackets/KeyPacket";
import MoveToLocation from "./serverpackets/MoveToLocation";
import MoveToPawn from "./serverpackets/MoveToPawn";
import MyTargetSelected from "./serverpackets/MyTargetSelected";
import NpcInfo from "./serverpackets/NpcInfo";
import NpcQuestHtmlMessage from "./serverpackets/NpcQuestHtmlMessage";
import NpcSay from "./serverpackets/NpcSay";
import PartyMemberPosition from "./serverpackets/PartyMemberPosition";
import PartySmallWindowAdd from "./serverpackets/PartySmallWindowAdd";
import PartySmallWindowAll from "./serverpackets/PartySmallWindowAll";
import PartySmallWindowDelete from "./serverpackets/PartySmallWindowDelete";
import PartySmallWindowDeleteAll from "./serverpackets/PartySmallWindowDeleteAll";
import PartySmallWindowUpdate from "./serverpackets/PartySmallWindowUpdate";
import PetDelete from "./serverpackets/PetDelete";
import RelationChanged from "./serverpackets/RelationChanged";
import Revive from "./serverpackets/Revive";
import ShortCutInit from "./serverpackets/ShortCutInit";
import SkillCoolTime from "./serverpackets/SkillCoolTime";
import SkillList from "./serverpackets/SkillList";
import Snoop from "./serverpackets/Snoop";
import SocialAction from "./serverpackets/SocialAction";
import SpawnItem from "./serverpackets/SpawnItem";
import SSQInfo from "./serverpackets/SSQInfo";
import StaticObject from "./serverpackets/StaticObject";
import StatusUpdate from "./serverpackets/StatusUpdate";
import StopMove from "./serverpackets/StopMove";
import StopRotation from "./serverpackets/StopRotation";
import SunRise from "./serverpackets/SunRise";
import SunSet from "./serverpackets/SunSet";
import SystemMessage from "./serverpackets/SystemMessage";
import TargetSelected from "./serverpackets/TargetSelected";
import TargetUnselected from "./serverpackets/TargetUnselected";
import TeleportToLocation from "./serverpackets/TeleportToLocation";
import TutorialEnableClientEvent from "./serverpackets/TutorialEnableClientEvent";
import TutorialShowQuestionMark from "./serverpackets/TutorialShowQuestionMark";
import UserInfo from "./serverpackets/UserInfo";
import ValidateLocation from "./serverpackets/ValidateLocation";
import GameClient from "./GameClient";
import ActionFailed from "./serverpackets/ActionFailed";
import RecipeItemMakeInfo from "./serverpackets/RecipeItemMakeInfo";
import RecipeBookItemList from "./serverpackets/RecipeBookItemList";
import MagicSkillLaunched from "./serverpackets/MagicSkillLaunched";
import MagicSkillUse from "./serverpackets/MagicSkillUse";

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
        case 0x09:
          rpk = new CharSelectionInfo();
          break;
        case 0x0b:
          rpk = new CharSelected();
          break;
        case 0x0c:
          rpk = new NpcInfo();
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
        case 0x16:
          rpk = new DropItem();
          break;
        case 0x18:
          rpk = new StatusUpdate();
          break;
        case 0x1f:
          rpk = new ActionFailed();
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
        case 0x2e:
          rpk = new KeyPacket();
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
        case 0x48:
          rpk = new MagicSkillUse();
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
        case 0x54:
          rpk = new MagicSkillLaunched();
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
        case 0xdc:
          rpk = new RecipeBookItemList();
          break;
        case 0xdd:
          rpk = new RecipeItemMakeInfo();
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
                console.debug(
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
            console.debug(
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
      console.error(err);
    }
    //if (rpk) console.log("processing...", rpk.constructor.name);
    return rpk;
  }
}
