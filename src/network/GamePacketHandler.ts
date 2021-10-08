import IPacketHandler from "../mmocore/IPacketHandler";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import AbnormalStatusUpdate from "./incoming/game/AbnormalStatusUpdate";
import AskJoinParty from "./incoming/game/AskJoinParty";
import Attack from "./incoming/game/Attack";
import AutoAttackStart from "./incoming/game/AutoAttackStart";
import AutoAttackStop from "./incoming/game/AutoAttackStop";
import ChangeMoveType from "./incoming/game/ChangeMoveType";
import CharInfo from "./incoming/game/CharInfo";
import CharSelected from "./incoming/game/CharSelected";
import CharSelectionInfo from "./incoming/game/CharSelectionInfo";
import CreatureSay from "./incoming/game/CreatureSay";
import DeleteObject from "./incoming/game/DeleteObject";
import Die from "./incoming/game/Die";
import DropItem from "./incoming/game/DropItem";
import EquipUpdate from "./incoming/game/EquipUpdate";
import EtcStatusUpdate from "./incoming/game/EtcStatusUpdate";
import ExBrExtraUserInfo from "./incoming/game/ExBrExtraUserInfo";
import ExDuelAskStart from "./incoming/game/ExDuelAskStart";
import ExQuestItemList from "./incoming/game/ExQuestItemList";
import ExRedSky from "./incoming/game/ExRedSky";
import ExVoteSystemInfo from "./incoming/game/ExVoteSystemInfo";
import ItemList from "./incoming/game/ItemList";
import JoinParty from "./incoming/game/JoinParty";
import KeyPacket from "./incoming/game/KeyPacket";
import MoveToLocation from "./incoming/game/MoveToLocation";
import MoveToPawn from "./incoming/game/MoveToPawn";
import MyTargetSelected from "./incoming/game/MyTargetSelected";
import NpcInfo from "./incoming/game/NpcInfo";
import NpcQuestHtmlMessage from "./incoming/game/NpcQuestHtmlMessage";
import NpcSay from "./incoming/game/NpcSay";
import PartyMemberPosition from "./incoming/game/PartyMemberPosition";
import PartySmallWindowAdd from "./incoming/game/PartySmallWindowAdd";
import PartySmallWindowAll from "./incoming/game/PartySmallWindowAll";
import PartySmallWindowDelete from "./incoming/game/PartySmallWindowDelete";
import PartySmallWindowDeleteAll from "./incoming/game/PartySmallWindowDeleteAll";
import PartySmallWindowUpdate from "./incoming/game/PartySmallWindowUpdate";
import PetDelete from "./incoming/game/PetDelete";
import RelationChanged from "./incoming/game/RelationChanged";
import Revive from "./incoming/game/Revive";
import ShortCutInit from "./incoming/game/ShortCutInit";
import SkillCoolTime from "./incoming/game/SkillCoolTime";
import SkillList from "./incoming/game/SkillList";
import Snoop from "./incoming/game/Snoop";
import SocialAction from "./incoming/game/SocialAction";
import SpawnItem from "./incoming/game/SpawnItem";
import SSQInfo from "./incoming/game/SSQInfo";
import StaticObject from "./incoming/game/StaticObject";
import StatusUpdate from "./incoming/game/StatusUpdate";
import StopMove from "./incoming/game/StopMove";
import StopRotation from "./incoming/game/StopRotation";
import SunRise from "./incoming/game/SunRise";
import SunSet from "./incoming/game/SunSet";
import SystemMessage from "./incoming/game/SystemMessage";
import TargetSelected from "./incoming/game/TargetSelected";
import TargetUnselected from "./incoming/game/TargetUnselected";
import TeleportToLocation from "./incoming/game/TeleportToLocation";
import TutorialEnableClientEvent from "./incoming/game/TutorialEnableClientEvent";
import TutorialShowQuestionMark from "./incoming/game/TutorialShowQuestionMark";
import UserInfo from "./incoming/game/UserInfo";
import ValidateLocation from "./incoming/game/ValidateLocation";
import GameClient from "./GameClient";
import ActionFailed from "./incoming/game/ActionFailed";
import RecipeItemMakeInfo from "./incoming/game/RecipeItemMakeInfo";
import RecipeBookItemList from "./incoming/game/RecipeBookItemList";
import MagicSkillLaunched from "./incoming/game/MagicSkillLaunched";
import MagicSkillUse from "./incoming/game/MagicSkillUse";
import TempBan from "./incoming/game/TempBan";
import Logger from "../mmocore/Logger";
import PlayerInGame from "./incoming/game/PlayerInGame";
import ExSendManorList from "./incoming/game/ExSendManorList";
import ExUISetting from "./incoming/game/ExUISetting";
import ExSetCompassZoneCode from "./incoming/game/ExSetCompassZoneCode";
import ExStorageMaxCount from "./incoming/game/ExStorageMaxCount";
import FriendList from "./incoming/game/FriendList";
import ExShowContactList from "./incoming/game/ExShowContactList";
import ExNevitAdventPointInfoPacket from "./incoming/game/ExNevitAdventPointInfoPacket";
import ExNevitAdventTimeChange from "./incoming/game/ExNevitAdventTimeChange";
import ExShowScreenMessage from "./incoming/game/ExShowScreenMessage";
import PledgeInfo from "./incoming/game/PledgeInfo";
import PrivateStoreListSell from "./incoming/game/PrivateStoreListSell";
import NpcHtmlMessage from "./incoming/game/NpcHtmlMessage";
import LeaveWorld from "./incoming/game/LeaveWorld";
import GetItem from "./incoming/game/GetItem";
import NormalCamera from "./incoming/game/NormalCamera";
import NicknameChanged from "./incoming/game/NicknameChanged";
import ChangeWaitType from "./incoming/game/ChangeWaitType";
import ShowBoard from "./incoming/game/ShowBoard";
import ShortCutRegister from "./incoming/game/ShortCutRegister";
import InventoryUpdate from "./incoming/game/InventoryUpdate";
import RestartResponse from "./incoming/game/RestartResponse";
import WareHouseDepositList from "./incoming/game/WareHouseDepositList";
import WareHouseWithdrawalList from "./incoming/game/WareHouseWithdrawalList";
import VehicleStarted from "./incoming/game/VehicleStarted";
import VehicleInfo from "./incoming/game/VehicleInfo";
import VehicleDeparture from "./incoming/game/VehicleDeparture";
import VehicleCheckLocation from "./incoming/game/VehicleCheckLocation";
import ValidateLocationInVehicle from "./incoming/game/ValidateLocationInVehicle";
import TutorialShowHtml from "./incoming/game/TutorialShowHtml";
import TutorialCloseHtml from "./incoming/game/TutorialCloseHtml";
import TradeStart from "./incoming/game/TradeStart";
import TradeOwnAdd from "./incoming/game/TradeOwnAdd";
import TradeOtherDone from "./incoming/game/TradeOtherDone";
import TradeDone from "./incoming/game/TradeDone";
import SurrenderPledgeWar from "./incoming/game/SurrenderPledgeWar";
import StopPledgeWar from "./incoming/game/StopPledgeWar";
import StopMoveInVehicle from "./incoming/game/StopMoveInVehicle";
import StartRotation from "./incoming/game/StartRotation";
import StartPledgeWar from "./incoming/game/StartPledgeWar";
import SpecialCamera from "./incoming/game/SpecialCamera";
import HennaEquipList from "./incoming/game/HennaEquipList";
import HennaInfo from "./incoming/game/HennaInfo";
import HennaItemDrawInfo from "./incoming/game/HennaItemDrawInfo";
import HennaItemRemoveInfo from "./incoming/game/HennaItemRemoveInfo";
import HennaRemoveList from "./incoming/game/HennaRemoveList";
import TradeOtherAdd from "./incoming/game/TradeOtherAdd";
import ConfirmDlg from "./incoming/game/ConfirmDlg";
import ServerClose from "./incoming/game/ServerClose";
import PartySpelled from "./incoming/game/PartySpelled";
import SendTradeRequest from "./incoming/game/SendTradeRequest";
import SetupGauge from "./incoming/game/SetupGauge";
import ExFishingEnd from "./incoming/game/ExFishingEnd";
import ExFishingHpRegen from "./incoming/game/ExFishingHpRegen";

export default class GamePacketHandler implements IPacketHandler<GameClient> {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  // @Override
  handlePacket(data: Uint8Array, client: GameClient): ReceivablePacket {
    const opcode: number = data[0] & 0xff;

    let rpk!: ReceivablePacket;

    try {
      switch (opcode) {
        case 0x00:
          rpk = new Die();
          break;
        case 0x01:
          rpk = new Revive();
          break;
        case 0x02:
          rpk = new PlayerInGame();
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
        case 0x0a:
          rpk = new TempBan();
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
        case 0x14:
          rpk = new TradeStart();
          break;
        case 0x16:
          rpk = new DropItem();
          break;
        case 0x17:
          rpk = new GetItem();
          break;
        case 0x18:
          rpk = new StatusUpdate();
          break;
        case 0x19:
          rpk = new NpcHtmlMessage();
          break;
        case 0x20:
          rpk = new ServerClose();
          break;
        case 0x1a:
          rpk = new TradeOwnAdd();
          break;
        case 0x1b:
          rpk = new TradeOtherAdd();
          break;
        case 0x1c:
          rpk = new TradeDone();
          break;
        case 0x1f:
          rpk = new ActionFailed();
          break;
        case 0x21:
          rpk = new InventoryUpdate();
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
        case 0x29:
          rpk = new ChangeWaitType();
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
        case 0x41:
          rpk = new WareHouseDepositList();
          break;
        case 0x42:
          rpk = new WareHouseWithdrawalList();
          break;
        case 0x44:
          rpk = new ShortCutRegister();
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
        case 0x60:
          rpk = new VehicleInfo();
          break;
        case 0x61:
          rpk = new StopRotation();
          break;
        case 0x62:
          rpk = new SystemMessage();
          break;
        case 0x63:
          rpk = new StartPledgeWar();
          break;
        case 0x65:
          rpk = new StopPledgeWar();
          break;
        case 0x67:
          rpk = new SurrenderPledgeWar();
          break;
        case 0x6b:
          rpk = new SetupGauge();
          break;
        case 0x6c:
          rpk = new VehicleDeparture();
          break;
        case 0x6d:
          rpk = new VehicleCheckLocation();
          break;
        case 0x70:
          rpk = new SendTradeRequest();
          break;
        case 0x71:
          rpk = new RestartResponse();
          break;
        case 0x72:
          rpk = new MoveToPawn();
          break;
        case 0x73:
          rpk = new SSQInfo();
          break;
        case 0x75:
          rpk = new FriendList();
          break;
        case 0x79:
          rpk = new ValidateLocation();
          break;
        case 0x7a:
          rpk = new StartRotation();
          break;
        case 0x7b:
          rpk = new ShowBoard();
          break;
        case 0x7f:
          rpk = new StopMoveInVehicle();
          break;
        case 0x80:
          rpk = new ValidateLocationInVehicle();
          break;
        case 0x82:
          rpk = new TradeOtherDone();
          break;
        case 0x84:
          rpk = new LeaveWorld();
          break;
        case 0x85:
          rpk = new AbnormalStatusUpdate();
          break;
        case 0x89:
          rpk = new PledgeInfo();
          break;
        case 0x9f:
          rpk = new StaticObject();
          break;
        case 0xa1:
          rpk = new PrivateStoreListSell();
          break;
        case 0xa6:
          rpk = new TutorialShowHtml();
          break;
        case 0xa7:
          rpk = new TutorialShowQuestionMark();
          break;
        case 0xa8:
          rpk = new TutorialEnableClientEvent();
          break;
        case 0xa9:
          rpk = new TutorialCloseHtml();
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
        case 0xc0:
          rpk = new VehicleStarted();
          break;
        case 0xc7:
          rpk = new SkillCoolTime();
          break;
        case 0xcc:
          rpk = new NicknameChanged();
          break;
        case 0xce:
          rpk = new RelationChanged();
          break;
        case 0xd6:
          rpk = new SpecialCamera();
          break;
        case 0xd7:
          rpk = new NormalCamera();
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
        case 0xe4:
          rpk = new HennaItemDrawInfo();
          break;
        case 0xe5:
          rpk = new HennaInfo();
          break;
        case 0xe6:
          rpk = new HennaRemoveList();
          break;
        case 0xe7:
          rpk = new HennaItemRemoveInfo();
          break;
        case 0xee:
          rpk = new HennaEquipList();
          break;
        case 0xf3:
          rpk = new ConfirmDlg();
          break;
        case 0xf4:
          rpk = new PartySpelled();
          break;
        case 0xf9:
          rpk = new EtcStatusUpdate();
          break;
        case 0xfe: {
          const sub = data[1] + (data[2] << 8);
          switch (sub) {
            case 0x1f:
              rpk = new ExFishingEnd();
              break;
            case 0x22:
              rpk = new ExSendManorList();
              break;
            case 0x28:
              rpk = new ExFishingHpRegen();
              break;
            case 0x2f:
              rpk = new ExStorageMaxCount();
              break;
            case 0x33:
              rpk = new ExSetCompassZoneCode();
              break;
            case 0x39:
              rpk = new ExShowScreenMessage();
              break;
            case 0x41:
              rpk = new ExRedSky();
              break;
            case 0x4c:
              rpk = new ExDuelAskStart();
              break;
            case 0x70:
              rpk = new ExUISetting();
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
            case 0xd3:
              rpk = new ExShowContactList();
              break;
            case 0xda:
              rpk = new ExBrExtraUserInfo();
              break;
            case 0xdf:
              rpk = new ExNevitAdventPointInfoPacket();
              break;
            case 0xe1:
              rpk = new ExNevitAdventTimeChange();
              break;

            default:
              // no-op
              break;
          }
          break;
        }
        default:
          // no-op
          break;
      }

      if (!rpk) {
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
      } else {
        // rpk.Client = client;
        rpk.Buffer = data;
      }
    } catch (err) {
      this.logger.error(err);
    }

    return rpk;
  }
}
