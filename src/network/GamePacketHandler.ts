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
import ConfirmDlg from "./serverpackets/ConfirmDlg";
import ServerClose from "./serverpackets/ServerClose";
import PartySpelled from "./serverpackets/PartySpelled";
import SendTradeRequest from "./serverpackets/SendTradeRequest";
import SetupGauge from "./serverpackets/SetupGauge";

export default class GamePacketHandler implements IPacketHandler<GameClient> {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  // @Override
  handlePacket(
    data: Uint8Array,
    client: GameClient
  ): ReceivablePacket<GameClient> {
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
            case 0x22:
              rpk = new ExSendManorList();
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
          break;
        }
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
