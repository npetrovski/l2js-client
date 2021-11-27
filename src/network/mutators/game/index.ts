import AbnormalStatusUpdate from "../../incoming/game/AbnormalStatusUpdate";
import ChangeWaitType from "../../incoming/game/ChangeWaitType";
import CharInfo from "../../incoming/game/CharInfo";
import CharSelected from "../../incoming/game/CharSelected";
import ConfirmDlg from "../../incoming/game/ConfirmDlg";
import DeleteObject from "../../incoming/game/DeleteObject";
import Die from "../../incoming/game/Die";
import DropItem from "../../incoming/game/DropItem";
import EtcStatusUpdate from "../../incoming/game/EtcStatusUpdate";
import ExQuestItemList from "../../incoming/game/ExQuestItemList";
import ExRotation from "../../incoming/game/ExRotation";
import ExVoteSystemInfo from "../../incoming/game/ExVoteSystemInfo";
import InventoryUpdate from "../../incoming/game/InventoryUpdate";
import ItemList from "../../incoming/game/ItemList";
import KeyPacket from "../../incoming/game/KeyPacket";
import MagicSkillUse from "../../incoming/game/MagicSkillUse";
import MoveToLocation from "../../incoming/game/MoveToLocation";
import MoveToPawn from "../../incoming/game/MoveToPawn";
import MyTargetSelected from "../../incoming/game/MyTargetSelected";
import NpcInfo from "../../incoming/game/NpcInfo";
import PartyMemberPosition from "../../incoming/game/PartyMemberPosition";
import PartySmallWindowAdd from "../../incoming/game/PartySmallWindowAdd";
import PartySmallWindowAll from "../../incoming/game/PartySmallWindowAll";
import PartySmallWindowDelete from "../../incoming/game/PartySmallWindowDelete";
import PartySmallWindowDeleteAll from "../../incoming/game/PartySmallWindowDeleteAll";
import PartySmallWindowUpdate from "../../incoming/game/PartySmallWindowUpdate";
import PartySpelled from "../../incoming/game/PartySpelled";
import RecipeBookItemList from "../../incoming/game/RecipeBookItemList";
import Revive from "../../incoming/game/Revive";
import SetupGauge from "../../incoming/game/SetupGauge";
import SkillCoolTime from "../../incoming/game/SkillCoolTime";
import SkillList from "../../incoming/game/SkillList";
import SpawnItem from "../../incoming/game/SpawnItem";
import StatusUpdate from "../../incoming/game/StatusUpdate";
import StopMove from "../../incoming/game/StopMove";
import TargetSelected from "../../incoming/game/TargetSelected";
import TargetUnselected from "../../incoming/game/TargetUnselected";
import TeleportToLocation from "../../incoming/game/TeleportToLocation";
import UserInfo from "../../incoming/game/UserInfo";
import ValidateLocation from "../../incoming/game/ValidateLocation";
import AbnormalStatusUpdateMutator from "./AbnormalStatusUpdateMutator";
import ChangeWaitTypeMutator from "./ChangeWaitTypeMutator";
import CharInfoMutator from "./CharInfoMutator";
import CharSelectedMutator from "./CharSelectedMutator";
import ConfirmDlgMutator from "./ConfirmDlgMutator";
import DeleteObjectMutator from "./DeleteObjectMutator";
import DieMutator from "./DieMutator";
import DropItemMutator from "./DropItemMutator";
import EtcStatusUpdateMutator from "./EtcStatusUpdateMutator";
import ExQuestItemListMutator from "./ExQuestItemListMutator";
import ExRotationMutator from "./ExRotationMutator";
import ExVoteSystemInfoMutator from "./ExVoteSystemInfoMutator";
import InventoryUpdateMutator from "./InventoryUpdateMutator";
import ItemListMutator from "./ItemListMutator";
import KeyPacketMutator from "./KeyPacketMutator";
import MagicSkillUseMutator from "./MagicSkillUseMutator";
import MoveToLocationMutator from "./MoveToLocationMutator";
import MoveToPawnMutator from "./MoveToPawnMutator";
import MyTargetSelectedMutator from "./MyTargetSelectedMutator";
import NpcInfoMutator from "./NpcInfoMutator";
import PartyMemberPositionMutator from "./PartyMemberPositionMutator";
import PartySmallWindowAddMutator from "./PartySmallWindowAddMutator";
import PartySmallWindowAllMutator from "./PartySmallWindowAllMutator";
import PartySmallWindowDeleteAllMutator from "./PartySmallWindowDeleteAllMutator";
import PartySmallWindowDeleteMutator from "./PartySmallWindowDeleteMutator";
import PartySmallWindowUpdateMutator from "./PartySmallWindowUpdateMutator";
import PartySpelledMutator from "./PartySpelledMutator";
import RecipeBookItemListMutator from "./RecipeBookItemListMutator";
import ReviveMutator from "./ReviveMutator";
import SetupGaugeMutator from "./SetupGaugeMutator";
import SkillCoolTimeMutator from "./SkillCoolTimeMutator";
import SkillListMutator from "./SkillListMutator";
import SpawnItemMutator from "./SpawnItemMutator";
import StatusUpdateMutator from "./StatusUpdateMutator";
import StopMoveMutator from "./StopMoveMutator";
import TargetSelectedMutator from "./TargetSelectedMutator";
import TargetUnselectedMutator from "./TargetUnselectedMutator";
import TeleportToLocationMutator from "./TeleportToLocationMutator";
import UserInfoMutator from "./UserInfoMutator";
import ValidateLocationMutator from "./ValidateLocationMutator";
import ActionFailed from "../../incoming/game/ActionFailed";
import AskJoinParty from "../../incoming/game/AskJoinParty";
import Attack from "../../incoming/game/Attack";
import CreatureSay from "../../incoming/game/CreatureSay";
import ExDuelAskStart from "../../incoming/game/ExDuelAskStart";
import NpcHtmlMessage from "../../incoming/game/NpcHtmlMessage";
import NpcQuestHtmlMessage from "../../incoming/game/NpcQuestHtmlMessage";
import RecipeItemMakeInfo from "../../incoming/game/RecipeItemMakeInfo";
import SystemMessage from "../../incoming/game/SystemMessage";
import ActionFailedMutator from "./ActionFailedMutator";
import AskJoinPartyMutator from "./AskJoinPartyMutator";
import AttackMutator from "./AttackMutator";
import CreatureSayMutator from "./CreatureSayMutator";
import ExDuelAskStartMutator from "./ExDuelAskStartMutator";
import NpcHtmlMessageMutator from "./NpcHtmlMessageMutator";
import NpcQuestHtmlMessageMutator from "./NpcQuestHtmlMessageMutator";
import RecipeItemMakeInfoMutator from "./RecipeItemMakeInfoMutator";
import SystemMessageMutator from "./SystemMessageMutator";

export default [
  [AbnormalStatusUpdateMutator.prototype, AbnormalStatusUpdate],
  [CharInfoMutator.prototype, CharInfo],
  [ChangeWaitTypeMutator.prototype, ChangeWaitType],
  [CharSelectedMutator.prototype, CharSelected],
  [ConfirmDlgMutator.prototype, ConfirmDlg],
  [DeleteObjectMutator.prototype, DeleteObject],
  [DieMutator.prototype, Die],
  [DropItemMutator.prototype, DropItem],
  [EtcStatusUpdateMutator.prototype, EtcStatusUpdate],
  [ExQuestItemListMutator.prototype, ExQuestItemList],
  [ExRotationMutator.prototype, ExRotation],
  [ExVoteSystemInfoMutator.prototype, ExVoteSystemInfo],
  [InventoryUpdateMutator.prototype, InventoryUpdate],
  [ItemListMutator.prototype, ItemList],
  [KeyPacketMutator.prototype, KeyPacket],
  [MagicSkillUseMutator.prototype, MagicSkillUse],
  [MoveToLocationMutator.prototype, MoveToLocation],
  [MoveToPawnMutator.prototype, MoveToPawn],
  [MyTargetSelectedMutator.prototype, MyTargetSelected],
  [NpcInfoMutator.prototype, NpcInfo],
  [PartyMemberPositionMutator.prototype, PartyMemberPosition],
  [PartySmallWindowAddMutator.prototype, PartySmallWindowAdd],
  [PartySmallWindowAllMutator.prototype, PartySmallWindowAll],
  [PartySmallWindowDeleteMutator.prototype, PartySmallWindowDelete],
  [PartySmallWindowDeleteAllMutator.prototype, PartySmallWindowDeleteAll],
  [PartySmallWindowUpdateMutator.prototype, PartySmallWindowUpdate],
  [PartySpelledMutator.prototype, PartySpelled],
  [RecipeBookItemListMutator.prototype, RecipeBookItemList],
  [ReviveMutator.prototype, Revive],
  [SetupGaugeMutator.prototype, SetupGauge],
  [SkillCoolTimeMutator.prototype, SkillCoolTime],
  [SkillListMutator.prototype, SkillList],
  [SpawnItemMutator.prototype, SpawnItem],
  [StatusUpdateMutator.prototype, StatusUpdate],
  [StopMoveMutator.prototype, StopMove],
  [TargetSelectedMutator.prototype, TargetSelected],
  [TargetUnselectedMutator.prototype, TargetUnselected],
  [TeleportToLocationMutator.prototype, TeleportToLocation],
  [UserInfoMutator.prototype, UserInfo],
  [ValidateLocationMutator.prototype, ValidateLocation],
  [ActionFailedMutator.prototype, ActionFailed],
  [AskJoinPartyMutator.prototype, AskJoinParty],
  [AttackMutator.prototype, Attack],
  [CreatureSayMutator.prototype, CreatureSay],
  [ExDuelAskStartMutator.prototype, ExDuelAskStart],
  [NpcHtmlMessageMutator.prototype, NpcHtmlMessage],
  [NpcQuestHtmlMessageMutator.prototype, NpcQuestHtmlMessage],
  [RecipeItemMakeInfoMutator.prototype, RecipeItemMakeInfo],
  [SystemMessageMutator.prototype, SystemMessage],
];
