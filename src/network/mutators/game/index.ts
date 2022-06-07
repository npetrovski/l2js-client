
import AbnormalStatusUpdateMutator from "./AbnormalStatusUpdateMutator";
import AbnormalStatusUpdate from "../../incoming/game/AbnormalStatusUpdate";
import ActionFailedMutator from "./ActionFailedMutator";
import ActionFailed from "../../incoming/game/ActionFailed";
import AskJoinPartyMutator from "./AskJoinPartyMutator";
import AskJoinParty from "../../incoming/game/AskJoinParty";
import AttackMutator from "./AttackMutator";
import Attack from "../../incoming/game/Attack";
import ChangeWaitTypeMutator from "./ChangeWaitTypeMutator";
import ChangeWaitType from "../../incoming/game/ChangeWaitType";
import CharInfoMutator from "./CharInfoMutator";
import CharInfo from "../../incoming/game/CharInfo";
import CharSelectedMutator from "./CharSelectedMutator";
import CharSelected from "../../incoming/game/CharSelected";
import ConfirmDlgMutator from "./ConfirmDlgMutator";
import ConfirmDlg from "../../incoming/game/ConfirmDlg";
import CreatureSayMutator from "./CreatureSayMutator";
import CreatureSay from "../../incoming/game/CreatureSay";
import DeleteObjectMutator from "./DeleteObjectMutator";
import DeleteObject from "../../incoming/game/DeleteObject";
import DieMutator from "./DieMutator";
import Die from "../../incoming/game/Die";
import DropItemMutator from "./DropItemMutator";
import DropItem from "../../incoming/game/DropItem";
import EtcStatusUpdateMutator from "./EtcStatusUpdateMutator";
import EtcStatusUpdate from "../../incoming/game/EtcStatusUpdate";
import ExDuelAskStartMutator from "./ExDuelAskStartMutator";
import ExDuelAskStart from "../../incoming/game/ExDuelAskStart";
import ExQuestItemListMutator from "./ExQuestItemListMutator";
import ExQuestItemList from "../../incoming/game/ExQuestItemList";
import ExRotationMutator from "./ExRotationMutator";
import ExRotation from "../../incoming/game/ExRotation";
import ExVoteSystemInfoMutator from "./ExVoteSystemInfoMutator";
import ExVoteSystemInfo from "../../incoming/game/ExVoteSystemInfo";
import InventoryUpdateMutator from "./InventoryUpdateMutator";
import InventoryUpdate from "../../incoming/game/InventoryUpdate";
import ItemListMutator from "./ItemListMutator";
import ItemList from "../../incoming/game/ItemList";
import KeyPacketMutator from "./KeyPacketMutator";
import KeyPacket from "../../incoming/game/KeyPacket";
import MagicSkillUseMutator from "./MagicSkillUseMutator";
import MagicSkillUse from "../../incoming/game/MagicSkillUse";
import MoveToLocationMutator from "./MoveToLocationMutator";
import MoveToLocation from "../../incoming/game/MoveToLocation";
import MoveToPawnMutator from "./MoveToPawnMutator";
import MoveToPawn from "../../incoming/game/MoveToPawn";
import MyTargetSelectedMutator from "./MyTargetSelectedMutator";
import MyTargetSelected from "../../incoming/game/MyTargetSelected";
import NpcHtmlMessageMutator from "./NpcHtmlMessageMutator";
import NpcHtmlMessage from "../../incoming/game/NpcHtmlMessage";
import NpcInfoMutator from "./NpcInfoMutator";
import NpcInfo from "../../incoming/game/NpcInfo";
import NpcQuestHtmlMessageMutator from "./NpcQuestHtmlMessageMutator";
import NpcQuestHtmlMessage from "../../incoming/game/NpcQuestHtmlMessage";
import PartyMemberPositionMutator from "./PartyMemberPositionMutator";
import PartyMemberPosition from "../../incoming/game/PartyMemberPosition";
import PartySmallWindowAddMutator from "./PartySmallWindowAddMutator";
import PartySmallWindowAdd from "../../incoming/game/PartySmallWindowAdd";
import PartySmallWindowAllMutator from "./PartySmallWindowAllMutator";
import PartySmallWindowAll from "../../incoming/game/PartySmallWindowAll";
import PartySmallWindowDeleteAllMutator from "./PartySmallWindowDeleteAllMutator";
import PartySmallWindowDeleteAll from "../../incoming/game/PartySmallWindowDeleteAll";
import PartySmallWindowDeleteMutator from "./PartySmallWindowDeleteMutator";
import PartySmallWindowDelete from "../../incoming/game/PartySmallWindowDelete";
import PartySmallWindowUpdateMutator from "./PartySmallWindowUpdateMutator";
import PartySmallWindowUpdate from "../../incoming/game/PartySmallWindowUpdate";
import PartySpelledMutator from "./PartySpelledMutator";
import PartySpelled from "../../incoming/game/PartySpelled";
import RecipeBookItemListMutator from "./RecipeBookItemListMutator";
import RecipeBookItemList from "../../incoming/game/RecipeBookItemList";
import RecipeItemMakeInfoMutator from "./RecipeItemMakeInfoMutator";
import RecipeItemMakeInfo from "../../incoming/game/RecipeItemMakeInfo";
import ReviveMutator from "./ReviveMutator";
import Revive from "../../incoming/game/Revive";
import SetupGaugeMutator from "./SetupGaugeMutator";
import SetupGauge from "../../incoming/game/SetupGauge";
import SkillCoolTimeMutator from "./SkillCoolTimeMutator";
import SkillCoolTime from "../../incoming/game/SkillCoolTime";
import SkillListMutator from "./SkillListMutator";
import SkillList from "../../incoming/game/SkillList";
import SpawnItemMutator from "./SpawnItemMutator";
import SpawnItem from "../../incoming/game/SpawnItem";
import StatusUpdateMutator from "./StatusUpdateMutator";
import StatusUpdate from "../../incoming/game/StatusUpdate";
import StopMoveMutator from "./StopMoveMutator";
import StopMove from "../../incoming/game/StopMove";
import SystemMessageMutator from "./SystemMessageMutator";
import SystemMessage from "../../incoming/game/SystemMessage";
import TargetSelectedMutator from "./TargetSelectedMutator";
import TargetSelected from "../../incoming/game/TargetSelected";
import TargetUnselectedMutator from "./TargetUnselectedMutator";
import TargetUnselected from "../../incoming/game/TargetUnselected";
import TeleportToLocationMutator from "./TeleportToLocationMutator";
import TeleportToLocation from "../../incoming/game/TeleportToLocation";
import UserInfoMutator from "./UserInfoMutator";
import UserInfo from "../../incoming/game/UserInfo";
import ValidateLocationMutator from "./ValidateLocationMutator";
import ValidateLocation from "../../incoming/game/ValidateLocation";

export default [
  [AbnormalStatusUpdateMutator.prototype, AbnormalStatusUpdate],
  [ActionFailedMutator.prototype, ActionFailed],
  [AskJoinPartyMutator.prototype, AskJoinParty],
  [AttackMutator.prototype, Attack],
  [ChangeWaitTypeMutator.prototype, ChangeWaitType],
  [CharInfoMutator.prototype, CharInfo],
  [CharSelectedMutator.prototype, CharSelected],
  [ConfirmDlgMutator.prototype, ConfirmDlg],
  [CreatureSayMutator.prototype, CreatureSay],
  [DeleteObjectMutator.prototype, DeleteObject],
  [DieMutator.prototype, Die],
  [DropItemMutator.prototype, DropItem],
  [EtcStatusUpdateMutator.prototype, EtcStatusUpdate],
  [ExDuelAskStartMutator.prototype, ExDuelAskStart],
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
  [NpcHtmlMessageMutator.prototype, NpcHtmlMessage],
  [NpcInfoMutator.prototype, NpcInfo],
  [NpcQuestHtmlMessageMutator.prototype, NpcQuestHtmlMessage],
  [PartyMemberPositionMutator.prototype, PartyMemberPosition],
  [PartySmallWindowAddMutator.prototype, PartySmallWindowAdd],
  [PartySmallWindowAllMutator.prototype, PartySmallWindowAll],
  [PartySmallWindowDeleteAllMutator.prototype, PartySmallWindowDeleteAll],
  [PartySmallWindowDeleteMutator.prototype, PartySmallWindowDelete],
  [PartySmallWindowUpdateMutator.prototype, PartySmallWindowUpdate],
  [PartySpelledMutator.prototype, PartySpelled],
  [RecipeBookItemListMutator.prototype, RecipeBookItemList],
  [RecipeItemMakeInfoMutator.prototype, RecipeItemMakeInfo],
  [ReviveMutator.prototype, Revive],
  [SetupGaugeMutator.prototype, SetupGauge],
  [SkillCoolTimeMutator.prototype, SkillCoolTime],
  [SkillListMutator.prototype, SkillList],
  [SpawnItemMutator.prototype, SpawnItem],
  [StatusUpdateMutator.prototype, StatusUpdate],
  [StopMoveMutator.prototype, StopMove],
  [SystemMessageMutator.prototype, SystemMessage],
  [TargetSelectedMutator.prototype, TargetSelected],
  [TargetUnselectedMutator.prototype, TargetUnselected],
  [TeleportToLocationMutator.prototype, TeleportToLocation],
  [UserInfoMutator.prototype, UserInfo],
  [ValidateLocationMutator.prototype, ValidateLocation],

];
  