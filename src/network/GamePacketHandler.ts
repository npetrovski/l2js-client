import IPacketHandler from "../mmocore/IPacketHandler";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import Logger from "../mmocore/Logger";
import ActionFail from "./serverpackets/ActionFail";
import AbnormalStatusUpdate from "./serverpackets/AbnormalStatusUpdate";
import AskJoinParty from "./serverpackets/AskJoinParty";
import AskJoinPledge from "./serverpackets/AskJoinPledge";
import Attack from "./serverpackets/Attack";
import AutoAttackStart from "./serverpackets/AutoAttackStart";
import AutoAttackStop from "./serverpackets/AutoAttackStop";
import ChangeMoveType from "./serverpackets/ChangeMoveType";
import CharInfo from "./serverpackets/CharInfo";
import CharacterSelected from "./serverpackets/CharacterSelected";
import CharacterSelectionInfo from "./serverpackets/CharacterSelectionInfo";
import CharacterCreateSuccess from "./serverpackets/CharacterCreateSuccess";
import CharacterCreateFail from "./serverpackets/CharacterCreateFail";
import CharacterDeleteSuccess from "./serverpackets/CharacterDeleteSuccess";
import CharacterDeleteFail from "./serverpackets/CharacterDeleteFail";
import CreatePledge from "./serverpackets/CreatePledge";
import DeleteObject from "./serverpackets/DeleteObject";
import Die from "./serverpackets/Die";
import DropItem from "./serverpackets/DropItem";
import EquipUpdate from "./serverpackets/EquipUpdate";
import SellList from "./serverpackets/SellList";
import BuyList from "./serverpackets/BuyList";
import ItemList from "./serverpackets/ItemList";
import JoinParty from "./serverpackets/JoinParty";
import JoinPledge from "./serverpackets/JoinPledge";
import KeyPacket from "./serverpackets/KeyPacket";
import MoveToLocation from "./serverpackets/MoveToLocation";
import MoveToPawn from "./serverpackets/MoveToPawn";
import MyTargetSelected from "./serverpackets/MyTargetSelected";
import NpcInfo from "./serverpackets/NpcInfo";
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
import SocialAction from "./serverpackets/SocialAction";
import SpawnItem from "./serverpackets/SpawnItem";
import StaticObject from "./serverpackets/StaticObject";
import StatusUpdate from "./serverpackets/StatusUpdate";
import StopMove from "./serverpackets/StopMove";
import SunRise from "./serverpackets/SunRise";
import SunSet from "./serverpackets/SunSet";
import SystemMessage from "./serverpackets/SystemMessage";
import TargetSelected from "./serverpackets/TargetSelected";
import TargetUnselected from "./serverpackets/TargetUnselected";
import TeleportToLocation from "./serverpackets/TeleportToLocation";
import TutorialEnableClientEvent from "./serverpackets/TutorialEnableClientEvent";
import UserInfo from "./serverpackets/UserInfo";
import ValidateLocation from "./serverpackets/ValidateLocation";
import GameClient from "./GameClient";
import RecipeItemMakeInfo from "./serverpackets/RecipeItemMakeInfo";
import RecipeBookItemList from "./serverpackets/RecipeBookItemList";
import MagicSkillLaunched from "./serverpackets/MagicSkillLaunched";
import MagicSkillUse from "./serverpackets/MagicSkillUse";
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
import NewCharacterSuccess from "./serverpackets/NewCharacterSuccess";
import NewCharacterFail from "./serverpackets/NewCharacterFail";
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
import VersionCheck from "./serverpackets/VersionCheck";
import WithdrawalPledge from "./serverpackets/WithdrawalPledge";
import OustPledgeMember from "./serverpackets/OustPledgeMember";
import SetOustPledgeMember from "./serverpackets/SetOustPledgeMember";
import DismissPledge from "./serverpackets/DismissPledge";
import SetDismissPledge from "./serverpackets/SetDismissPledge";
import WithdrawalParty from "./serverpackets/WithdrawalParty";
import OustPartyMember from "./serverpackets/OustPartyMember";
import SetOustPartyMember from "./serverpackets/SetOustPartyMember";
import DismissParty from "./serverpackets/DismissParty";
import SetDismissParty from "./serverpackets/SetDismissParty";
import WareHouseWithdrawList from "./serverpackets/WareHouseWithdrawList";
import WareHouseDone from "./serverpackets/WareHouseDone";
import ShortCutDelete from "./serverpackets/ShortCutDelete";
import MagicSkillCanceled from "./serverpackets/MagicSkillCanceled";
import Say2 from "./serverpackets/Say2";
import DoorInfo from "./serverpackets/DoorInfo";
import DoorStatusUpdate from "./serverpackets/DoorStatusUpdate";
import PledgeShowMemberListAll from "./serverpackets/PledgeShowMemberListAll";
import PledgeShowMemberListUpdate from "./serverpackets/PledgeShowMemberListUpdate";
import PledgeShowMemberListAdd from "./serverpackets/PledgeShowMemberListAdd";
import PledgeShowMemberListDelete from "./serverpackets/PledgeShowMemberListDelete";
import GetOnVehicle from "./serverpackets/GetOnVehicle";
import GetOffVehicle from "./serverpackets/GetOffVehicle";
import TradeRequest from "./serverpackets/TradeRequest";
import StartRotating from "./serverpackets/StartRotating";
import FinishRotating from "./serverpackets/FinishRotating";
import ReplyStartPledgeWar from "./serverpackets/ReplyStartPledgeWar";
import ReplySurrenderPledgeWar from "./serverpackets/ReplySurrenderPledgeWar";
import SetPledgeCrest from "./serverpackets/SetPledgeCrest";
import PledgeCrest from "./serverpackets/PledgeCrest";
import SetupGauge from "./serverpackets/SetupGauge";
import ChooseInventoryItem from "./serverpackets/ChooseInventoryItem";
import MoveToLocationInVehicle from "./serverpackets/MoveToLocationInVehicle";
import TradeUpdate from "./serverpackets/TradeUpdate";
import TradePressOwnOk from "./serverpackets/TradePressOwnOk";
import TradePressOtherOk from "./serverpackets/TradePressOtherOk";
import LogOutOk from "./serverpackets/LogOutOk";
import QuestList from "./serverpackets/QuestList";
import EnchantResult from "./serverpackets/EnchantResult";
import PledgeShowMemberListDeleteAll from "./serverpackets/PledgeShowMemberListDeleteAll";
import PledgeExtendedInfo from "./serverpackets/PledgeExtendedInfo";
import SurrenderPersonally from "./serverpackets/SurrenderPersonally";
import Ride from "./serverpackets/Ride";
import GiveNickNameDone from "./serverpackets/GiveNickNameDone";
import PledgeShowInfoUpdate from "./serverpackets/PledgeShowInfoUpdate";
import ClientAction from "./serverpackets/ClientAction";
import AcquireSkillList from "./serverpackets/AcquireSkillList";
import AcquireSkillInfo from "./serverpackets/AcquireSkillInfo";
import ServerObjectInfo from "./serverpackets/ServerObjectInfo";
import GMHide from "./serverpackets/GMHide";
import AcquireSkillDone from "./serverpackets/AcquireSkillDone";
import GMViewCharacterInfo from "./serverpackets/GMViewCharacterInfo";
import PartyMatchList from "./serverpackets/PartyMatchList";
import PartyMatchDetail from "./serverpackets/PartyMatchDetail";
import PlaySound from "./serverpackets/PlaySound";
import NetPing from "./serverpackets/NetPing";

export default class GamePacketHandler implements IPacketHandler<GameClient> {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  // @Override
  handlePacket(data: Uint8Array, client: GameClient): ReceivablePacket<GameClient> {
    const opcode: number = data[0] & 0xff;

    let rpk!: ReceivablePacket<GameClient>;

    try {
      switch (opcode) {
        case 0x00:
          rpk = new VersionCheck();
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
        case 0x06:
          rpk = new Attack();
         break;
        case 0x08:
          // ??? rpk = new Attacked();
         break;
        case 0x0A:
          // ??? rpk = new AttackCanceled();
         break;
        case 0x0B:
          rpk = new Die();
         break;
        case 0x0C:
          rpk = new Revive();
         break;
        case 0x0D:
          // ??? rpk = new AttackOutofRange();
         break;
        case 0x0E:
          // ??? rpk = new AttackinCoolTime();
         break;
        case 0x0F:
          // ??? rpk = new AttackDeadTarget();
         break;
        case 0x10:
          rpk = new LeaveWorld();
         break;
        case 0x11:
          // ??? rpk = new AuthLoginSuccess();
         break;
        case 0x12:
          // ??? rpk = new AuthLoginFail();
         break;
        case 0x15:
          rpk = new SpawnItem();
         break;
        case 0x16:
          rpk = new DropItem();
         break;
        case 0x17:
          rpk = new GetItem();
         break;
        case 0x18:
          // ??? rpk = new EquipItem();
         break;
        case 0x19:
          // ??? rpk = new UnequipItem();
         break;
        case 0x1A:
          rpk = new StatusUpdate();
         break;
        case 0x1B:
          rpk = new NpcHtmlMessage();
         break;
        case 0x1C:
          rpk = new SellList();
         break;
        case 0x1D:
          rpk = new BuyList();
         break;
        case 0x1E:
          rpk = new DeleteObject();
         break;
        case 0x1F:
          rpk = new CharacterSelectionInfo();
         break;
        case 0x20:
          // ??? rpk = new LoginFail();
         break;
        case 0x21:
          rpk = new CharacterSelected();
         break;
        case 0x22:
          rpk = new NpcInfo();
         break;
        case 0x23:
          rpk = new NewCharacterSuccess();
         break;
        case 0x24:
          rpk = new NewCharacterFail();
         break;
        case 0x25:
          rpk = new CharacterCreateSuccess();
         break;
        case 0x26:
          rpk = new CharacterCreateFail();
         break;
        case 0x27:
          rpk = new ItemList();
         break;
        case 0x28:
          rpk = new SunRise();
         break;
        case 0x29:
          rpk = new SunSet();
         break;
        case 0x2A:
          // ??? rpk = new EquipItemSuccess();
         break;
        case 0x2B:
          // ??? rpk = new EquipItemFail();
         break;
        case 0x2C:
          // ??? rpk = new UnEquipItemSuccess();
         break;
        case 0x2D:
          // ??? rpk = new UnEquipItemFail();
         break;
        case 0x2E:
          rpk = new TradeStart();
         break;
        case 0x2F:
          // ??? rpk = new TradeStartOk();
         break;
        case 0x30:
          rpk = new TradeOwnAdd();
         break;
        case 0x31:
          rpk = new TradeOtherAdd();
         break;
        case 0x32:
          rpk = new TradeDone();
         break;
        case 0x33:
          rpk = new CharacterDeleteSuccess();
         break;
        case 0x34:
          rpk = new CharacterDeleteFail();
         break;
        case 0x35:
          rpk = new ActionFail();
         break;
        case 0x36:
          rpk = new ServerClose();
         break;
        case 0x37:
          rpk = new InventoryUpdate();
         break;
        case 0x38:
          rpk = new TeleportToLocation();
         break;
        case 0x39:
          rpk = new TargetSelected();
         break;
        case 0x3A:
          rpk = new TargetUnselected();
         break;
        case 0x3B:
          rpk = new AutoAttackStart();
         break;
        case 0x3C:
          rpk = new AutoAttackStop();
         break;
        case 0x3D:
          rpk = new SocialAction();
         break;
        case 0x3E:
          rpk = new ChangeMoveType();
         break;
        case 0x3F:
          rpk = new ChangeWaitType();
         break;
        case 0x40:
          // ??? rpk = new NetworkFail();
         break;
        case 0x43:
          rpk = new CreatePledge();
         break;
        case 0x44:
          rpk = new AskJoinPledge();
         break;
        case 0x45:
          rpk = new JoinPledge();
         break;
        case 0x46:
          rpk = new WithdrawalPledge();
         break;
        case 0x47:
          rpk = new OustPledgeMember();
         break;
        case 0x48:
          rpk = new SetOustPledgeMember();
         break;
        case 0x49:
          rpk = new DismissPledge();
         break;
        case 0x4A:
          rpk = new SetDismissPledge();
         break;
        case 0x4B:
          rpk = new AskJoinParty();
         break;
        case 0x4C:
          rpk = new JoinParty();
         break;
        case 0x4D:
          rpk = new WithdrawalParty();
         break;
        case 0x4E:
          rpk = new OustPartyMember();
         break;
        case 0x4F:
          rpk = new SetOustPartyMember();
         break;
        case 0x50:
          rpk = new DismissParty();
         break;
        case 0x51:
          rpk = new SetDismissParty();
         break;
        case 0x52:
          // ??? rpk = new MagicAndSkillList();
         break;
        case 0x53:
          rpk = new WareHouseDepositList();
         break;
        case 0x54:
          rpk = new WareHouseWithdrawList();
         break;
        case 0x55:
          rpk = new WareHouseDone();
         break;
        case 0x56:
          rpk = new ShortCutRegister();
         break;
        case 0x57:
          rpk = new ShortCutInit();
         break;
        case 0x58:
          rpk = new ShortCutDelete();
         break;
        case 0x59:
          rpk = new StopMove();
         break;
        case 0x5A:
          rpk = new MagicSkillUse();
         break;
        case 0x5B:
          rpk = new MagicSkillCanceled();
         break;
        case 0x5D:
          rpk = new Say2();
         break;
        case 0x5E:
          rpk = new EquipUpdate();
         break;
        case 0x5F:
          rpk = new StopMove();
         break;
        case 0x60:
          rpk = new DoorInfo();
         break;
        case 0x61:
          rpk = new DoorStatusUpdate();
         break;
        case 0x63:
          rpk = new PartySmallWindowAll();
         break;
        case 0x64:
          rpk = new PartySmallWindowAdd();
         break;
        case 0x65:
          rpk = new PartySmallWindowDeleteAll();
         break;
        case 0x66:
          rpk = new PartySmallWindowDelete();
         break;
        case 0x67:
          rpk = new PartySmallWindowUpdate();
         break;
        case 0x68:
          rpk = new PledgeShowMemberListAll();
         break;
        case 0x69:
          rpk = new PledgeShowMemberListUpdate();
         break;
        case 0x6A:
          rpk = new PledgeShowMemberListAdd();
         break;
        case 0x6B:
          rpk = new PledgeShowMemberListDelete();
         break;
        case 0x6C:
          // ??? rpk = new MagicList();
         break;
        case 0x6D:
          rpk = new SkillList();
         break;
        case 0x6E:
          rpk = new VehicleInfo();
         break;
        case 0x6F:
          rpk = new VehicleDeparture();
         break;
        case 0x70:
          rpk = new VehicleCheckLocation();
         break;
        case 0x71:
          rpk = new GetOnVehicle();
         break;
        case 0x72:
          rpk = new GetOffVehicle();
         break;
        case 0x73:
          rpk = new TradeRequest();
         break;
        case 0x74:
          rpk = new RestartResponse();
         break;
        case 0x75:
          rpk = new MoveToPawn();
         break;
        case 0x76:
          rpk = new ValidateLocation();
         break;
        case 0x77:
          rpk = new StartRotating();
         break;
        case 0x78:
          rpk = new FinishRotating();
         break;
        case 0x7A:
          rpk = new SystemMessage();
         break;
        case 0x7D:
          rpk = new StartPledgeWar();
         break;
        case 0x7E:
          rpk = new ReplyStartPledgeWar();
         break;
        case 0x7F:
          rpk = new StopPledgeWar();
         break;
        case 0x80:
          rpk = new ReplyStartPledgeWar();
         break;
        case 0x81:
          rpk = new SurrenderPledgeWar();
         break;
        case 0x82:
          rpk = new ReplySurrenderPledgeWar();
         break;
        case 0x83:
          rpk = new SetPledgeCrest();
         break;
        case 0x84:
          rpk = new PledgeCrest();
         break;
        case 0x85:
          rpk = new SetupGauge();
         break;
        case 0x86:
          rpk = new ShowBoard();
         break;
        case 0x87:
          rpk = new ChooseInventoryItem();
         break;
        case 0x89:
          rpk = new MoveToLocationInVehicle();
         break;
        case 0x8A:
          rpk = new StopMoveInVehicle();
         break;
        case 0x8B:
          rpk = new ValidateLocationInVehicle();
         break;
        case 0x8C:
          rpk = new TradeUpdate();
         break;
        case 0x8D:
          rpk = new TradePressOwnOk();
         break;
        case 0x8E:
          rpk = new MagicSkillLaunched();
         break;
        case 0x8F:
          // ??? rpk = new FriendAddRequestResult();
         break;
        case 0x90:
          // ??? rpk = new FriendAdd();
         break;
        case 0x91:
          // ??? rpk = new FriendRemove();
         break;
        case 0x92:
          rpk = new FriendList();
         break;
        case 0x93:
          // ??? rpk = new FriendStatus();
         break;
        case 0x94:
          rpk = new TradePressOtherOk();
         break;
        case 0x95:
          // ??? rpk = new FriendAddRequest();
         break;
        case 0x96:
          rpk = new LogOutOk();
         break;
        case 0x97:
          rpk = new AbnormalStatusUpdate();
         break;
        case 0x98:
          rpk = new QuestList();
         break;
        case 0x99:
          rpk = new EnchantResult();
         break;
        case 0x9A:
          // ??? rpk = new AuthServerList();
         break;
        case 0x9B:
          rpk = new PledgeShowMemberListDeleteAll();
         break;
        case 0x9C:
          rpk = new PledgeInfo();
         break;
        case 0x9D:
          rpk = new PledgeExtendedInfo();
         break;
        case 0x9E:
          rpk = new SurrenderPersonally();
         break;
        case 0x9F:
          rpk = new Ride();
         break;
        case 0xA0:
          rpk = new GiveNickNameDone();
         break;
        case 0xA1:
          rpk = new PledgeShowInfoUpdate();
         break;
        case 0xA2:
          rpk = new ClientAction();
         break;
        case 0xA3:
          rpk = new AcquireSkillList();
         break;
        case 0xA4:
          rpk = new AcquireSkillInfo();
         break;
        case 0xA5:
          rpk = new ServerObjectInfo();
         break;
        case 0xA6:
          rpk = new GMHide();
         break;
        case 0xA7:
          rpk = new AcquireSkillDone();
         break;
        case 0xA8:
          rpk = new GMViewCharacterInfo();
         break;
        case 0xA9:
          // @todo rpk = new GMViewPledgeInfo();
         break;
        case 0xAA:
          // @todo rpk = new GMViewSkillInfo();
         break;
        case 0xAB:
          // @todo rpk = new GMViewMagicInfo();
         break;
        case 0xAC:
          // @todo rpk = new GMViewQuestInfo();
         break;
        case 0xAD:
          // @todo rpk = new GMViewItemList();
         break;
        case 0xAE:
          // @todo rpk = new GMViewWarehouseWithdrawList();
         break;
        case 0xAF:
          rpk = new PartyMatchList();
         break;
        case 0xB0:
          rpk = new PartyMatchDetail();
         break;
        case 0xB1:
          rpk = new PlaySound();
         break;
        case 0xB2:
          rpk = new StaticObject();
         break;
        case 0xB3:
          // @todo rpk = new PrivateStoreSellManageList();
         break;
        case 0xB4:
          // @todo rpk = new PrivateStoreSellList();
         break;
        case 0xB5:
          // @todo rpk = new PrivateStoreSellMsg();
         break;
        case 0xB6:
          // @todo rpk = new ShowMinimap();
         break;
        case 0xB7:
          // @todo rpk = new ReviveRequest();
         break;
        case 0xB8:
          // @todo rpk = new AbnormalVisualEffect();
         break;
        case 0xB9:
          rpk = new TutorialShowHtml();
         break;
        case 0xBA:
          // @todo rpk = new ShowTutorialMark();
         break;
        case 0xBB:
          rpk = new TutorialEnableClientEvent();
         break;
        case 0xBC:
          rpk = new TutorialCloseHtml();
         break;
        case 0xBD:
          // @todo rpk = new ShowRadar();
         break;
        case 0xBE:
          // @todo rpk = new DeleteRadar();
         break;
        case 0xBF:
          rpk = new MyTargetSelected();
         break;
        case 0xC0:
          rpk = new PartyMemberPosition();
         break;
        case 0xC1:
          // @todo rpk = new AskJoinAlliance();
         break;
        case 0xC2:
          // @todo rpk = new JoinAlliance();
         break;
        case 0xC3:
          // @todo rpk = new WithdrawAlliance();
         break;
        case 0xC4:
          // @todo rpk = new OustAllianceMemberPledge();
         break;
        case 0xC5:
          // @todo rpk = new DismissAlliance();
         break;
        case 0xC6:
          // @todo rpk = new SetAllianceCrest();
         break;
        case 0xC7:
          // @todo rpk = new AllianceCrest();
         break;
        case 0xC8:
          // @todo rpk = new ServerCloseSocket();
         break;
        case 0xC9:
          // @todo rpk = new PetStatusShow();
         break;
        case 0xCA:
          // @todo rpk = new PetInfo();
         break;
        case 0xCB:
          // @todo rpk = new PetItemList();
         break;
        case 0xCC:
          // @todo rpk = new PetInventoryUpdate();
         break;
        case 0xCD:
          // @todo rpk = new AllianceInfo();
         break;
        case 0xCE:
          // @todo rpk = new PetStatusUpdate();
         break;
        case 0xCF:
          rpk = new PetDelete();
         break;
        case 0xD0:
          // @todo rpk = new PrivateStoreBuyManageList();
         break;
        case 0xD1:
          // @todo rpk = new PrivateStoreBuyList();
         break;
        case 0xD2:
          // @todo rpk = new PrivateStoreBuyMsg();
         break;
        case 0xD3:
          // @todo rpk = new VehicleStart();
         break;
        case 0xD4:
          // @todo rpk = new RequestTimeCheck();
         break;
        case 0xD5:
          // @todo rpk = new StartAllianceWar();
         break;
        case 0xD6:
          // @todo rpk = new ReplyStartAllianceWar();
         break;
        case 0xD7:
          // @todo rpk = new StopAllianceWar();
         break;
        case 0xD8:
          // @todo rpk = new ReplyStopAllianceWar();
         break;
        case 0xD9:
          // @todo rpk = new SurrenderAllianceWar();
         break;
        case 0xDA:
          rpk = new SkillCoolTime();
         break;
        case 0xDB:
          // @todo rpk = new PackageToList();
         break;
        case 0xDC:
          // @todo rpk = new PackageSendableList();
         break;
        case 0xDD:
          // @todo rpk = new EarthQuake();
         break;
        case 0xDE:
          // @todo rpk = new FlyToLocation();
         break;
        case 0xDF:
          // @todo rpk = new BlockList();
         break;
        case 0xE0:
          rpk = new SpecialCamera();
         break;
        case 0xE1:
          rpk = new NormalCamera();
         break;
        case 0xE2:
          // @todo rpk = new CastleSiegeInfo();
         break;
        case 0xE3:
          // @todo rpk = new CastleSiegeAttackerList();
         break;
        case 0xE4:
          // @todo rpk = new CastleSiegeDefenderList();
         break;
        case 0xE5:
          rpk = new NicknameChanged();
         break;
        case 0xE6:
          // @todo rpk = new PledgeStatusChanged();
         break;
        case 0xE7:
          rpk = new RelationChanged();
         break;
        case 0xE8:
          // @todo rpk = new EventTrigger();
         break;
        case 0xE9:
          // @todo rpk = new MultiSellList();
         break;
        case 0xEA:
          // @todo rpk = new SetSummonRemainTime();
         break;
        case 0xEB:
          // @todo rpk = new SkillRemainSec();
         break;
        case 0xEC:
          rpk = new NetPing();
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

      if (rpk) {
        rpk.Client = client;
        rpk.Buffer = data;
      }

    } catch (err) {
      this.logger.error(err);
    }

    return rpk;
  }
}
