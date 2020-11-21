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
import TempBan from "./serverpackets/TempBan";
import Logger from "../mmocore/Logger";
import PlayerInGame from "./serverpackets/PlayerInGame";
import ExSendManorList from "./serverpackets/ExSendManorList";
import ExUISetting from "./serverpackets/ExUISetting";
import ExSetCompassZoneCode from "./serverpackets/ExSetCompassZoneCode";
import ExStorageMaxCount from "./serverpackets/ExStorageMaxCount";
import FriendList from "./serverpackets/FriendList";
import ExShowContactList from "./serverpackets/ExShowContactList";
import ExNevitAdventPointInfoPacket from "./serverpackets/ExNevitAdventPointInfoPacket";
import ExNevitAdventTimeChange from "./serverpackets/ExNevitAdventTimeChange";
import ExShowScreenMessage from "./serverpackets/ExShowScreenMessage";
import PledgeInfo from "./serverpackets/PledgeInfo";
import PrivateStoreListSell from "./serverpackets/PrivateStoreListSell";
import NpcHtmlMessage from "./serverpackets/NpcHtmlMessage";
import LeaveWorld from "./serverpackets/LeaveWorld";
import GetItem from "./serverpackets/GetItem";
import NormalCamera from "./serverpackets/NormalCamera";
import NicknameChanged from "./serverpackets/NicknameChanged";
import ChangeWaitType from "./serverpackets/ChangeWaitType";
import ShowBoard from "./serverpackets/ShowBoard";
import ShortCutRegister from "./serverpackets/ShortCutRegister";
import InventoryUpdate from "./serverpackets/InventoryUpdate";
import RestartResponse from "./serverpackets/RestartResponse";
import WareHouseDepositList from "./serverpackets/WareHouseDepositList";
import WareHouseWithdrawalList from "./serverpackets/WareHouseWithdrawalList";
import VehicleStarted from "./serverpackets/VehicleStarted";
import VehicleInfo from "./serverpackets/VehicleInfo";
import VehicleDeparture from "./serverpackets/VehicleDeparture";
import VehicleCheckLocation from "./serverpackets/VehicleCheckLocation";
import ValidateLocationInVehicle from "./serverpackets/ValidateLocationInVehicle";
import TutorialShowHtml from "./serverpackets/TutorialShowHtml";
import TutorialCloseHtml from "./serverpackets/TutorialCloseHtml";
import TradeStart from "./serverpackets/TradeStart";
import TradeOwnAdd from "./serverpackets/TradeOwnAdd";
import TradeOtherDone from "./serverpackets/TradeOtherDone";
import TradeDone from "./serverpackets/TradeDone";
import SurrenderPledgeWar from "./serverpackets/SurrenderPledgeWar";
import StopPledgeWar from "./serverpackets/StopPledgeWar";
import StopMoveInVehicle from "./serverpackets/StopMoveInVehicle";
import StartRotation from "./serverpackets/StartRotation";
import StartPledgeWar from "./serverpackets/StartPledgeWar";
import SpecialCamera from "./serverpackets/SpecialCamera";
import HennaEquipList from "./serverpackets/HennaEquipList";
import HennaInfo from "./serverpackets/HennaInfo";
import HennaItemDrawInfo from "./serverpackets/HennaItemDrawInfo";
import HennaItemRemoveInfo from "./serverpackets/HennaItemRemoveInfo";
import HennaRemoveList from "./serverpackets/HennaRemoveList";
import TradeOtherAdd from "./serverpackets/TradeOtherAdd";
import CryptInit from "./serverpackets/CryptInit";


export default class GamePacketHandler implements IPacketHandler<GameClient> {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  // @Override
  handlePacket(data: Uint8Array, client: GameClient): ReceivablePacket<GameClient> {
    const opcode: number = data[0] & 0xff;

    let rpk!: ReceivablePacket<GameClient>;

    try {
      switch (opcode) {
        case 0x00:
          rpk = new CryptInit();
          break;
        case 0x01:
          rpk = new MoveToLocation();
          break;
        case 0x02:
          rpk = new NpcSay();
          break;
        case 0x03:
          rpk = new CharInfo();
          break;
        case 0x04:
          rpk = new UserInfo();
          break;
        case 0x05:
          rpk = new Attack();
          break;
        case 0x06:
          rpk = new Die();
          break;
        case 0x07:
          rpk = new Revive();
          break;
        case 0x0B:
          rpk = new SpawnItem();
          break;
        case 0x0C:
          rpk = new DropItem();
          break;
        case 0x0D:
          rpk = new GetItem();
          break;
        case 0x0E:
          rpk = new StatusUpdate();
          break;
        case 0x0F:
          rpk = new NpcHtmlMessage();
          break;
        case 0x12:
          rpk = new DeleteObject();
          break;
        case 0x13:
          rpk = new CharSelectionInfo();
          break;
        case 0x15:
          rpk = new CharSelected();
          break;
        case 0x16:
          rpk = new NpcInfo();
          break;
        case 0x7F:
          rpk = new TutorialShowHtml();
          break;
        case 0xA1:
          rpk = new TutorialShowQuestionMark();
          break;
        case 0xA2:
          rpk = new TutorialEnableClientEvent();
          break;
        case 0xA3:
          rpk = new TutorialCloseHtml();
          break;
        case 0xA6:
          rpk = new MyTargetSelected();
          break;
        case 0xA7:
          rpk = new PartyMemberPosition();
          break;
        case 0xB6:
          rpk = new PetDelete();
          break;
        case 0xBA:
          rpk = new VehicleStarted();
          break;
        case 0xF8:
          rpk = new SSQInfo();
          break;
        case 0xE4:
          rpk = new HennaInfo();
          break;
        case 0x1B:
          rpk = new ItemList();
          break;
        case 0x4A:
          rpk = new CreatureSay();
          break;
        case 0x39:
          rpk = new AskJoinParty();
          break;
        case 0x3A:
          rpk = new JoinParty();
          break;
        case 0x64:
          rpk = new SystemMessage();
          break;
        case 0x76:
          rpk = new MagicSkillLaunched();
          break;
        case 0x48:
          rpk = new MagicSkillUse();
          break;
        case 0x60:
          rpk = new MoveToPawn();
          break;
        case 0xCE:
          rpk = new RelationChanged();
          break;
        case 0x2D:
          rpk = new SocialAction();
          break;
        case 0x29:
          rpk = new TargetSelected();
          break;
        case 0x2A:
          rpk = new TargetUnselected();
          break;
        case 0x2B:
          rpk = new AutoAttackStart();
          break;
        case 0x2C:
          rpk = new AutoAttackStop();
          break;
        case 0xf3:
          rpk = new EtcStatusUpdate();
          break;
        case 0x61:
          rpk = new ValidateLocation();
          break;
        default:
          if (data.byteLength > 2) {
            this.logger.debug(
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
      this.logger.error(err);
    }

    return rpk;
  }
}