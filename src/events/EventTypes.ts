import L2Creature from "../entities/L2Creature";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import MMOClient from "../mmocore/MMOClient";
import SendablePacket from "../mmocore/SendablePacket";
import L2PartyMember from "../entities/L2PartyMember";
import LoginClient from "../network/LoginClient";
import GameClient from "../network/GameClient";

export declare type ELoggedIn = { type: string; data: { login: LoginClient; game: GameClient }; once: boolean };
export declare type EPacketReceived = { type: string; data: { packet: ReceivablePacket<MMOClient> }; once: boolean };
export declare type EPacketSent = { type: string; data: { packet: SendablePacket<MMOClient> }; once: boolean };
export declare type EPartyRequest = {
  type: string;
  data: { requestorName: string; partyDistributionType: number };
  once: boolean;
};
export declare type EDie = { type: string; data: { creature: L2Creature; isSpoiled: boolean }; once: boolean };
export declare type ETargetSelected = {
  type: string;
  data: { objectId: number; targetObjectId: number; targetLocation: number[] };
  once: boolean;
};
export declare type EMyTargetSelected = { type: string; data: { objectId: number }; once: boolean };
export declare type EAttacked = { type: string; data: { object: number; subjects: number[] }; once: boolean };
export declare type ERequestedDuel = { type: string; data: { requestorName: string }; once: boolean };
export declare type EStartMoving = { type: string; data: { creature: L2Creature }; once: boolean };
export declare type EStopMoving = { type: string; data: { creature: L2Creature }; once: boolean };
export declare type ECraftResult = { type: string; data: { recipeId: number; success: boolean }; once: boolean };
export declare type ERecipeBook = { type: string; data: { isDwarven: boolean }; once: boolean };
export declare type EPartySmallWindow = {
  type: string;
  data: { member: L2PartyMember; action: "add" | "add-all" | "delete" | "delete-all" | "update" };
  once: boolean;
};
export declare type EPartyMemberPosition = { type: string; data: { member: L2PartyMember }; once: boolean };
export declare type ECharInfo = { type: string; data: { creature: L2Creature }; once: boolean };
export declare type ERevive = { type: string; data: { creature: L2Creature }; once: boolean };
export declare type EConfirmDlg = {
  type: string;
  data: { messageId: number; params: []; time: number; requesterId: number };
  once: boolean;
};
export declare type ESystemMessage = { type: string; data: { messageId: number; params: [] }; once: boolean };
export declare type ECreatureSay = {
  type: string;
  data: { objectId: number; type: number; charName: string; npcStringId: number; messages: [] };
  once: boolean;
};
export declare type ENpcHtmlMessage = {
  type: string;
  data: { npcObjectId: number; html: string; itemId: number };
  once: boolean;
};
export declare type ENpcQuestHtmlMessage = {
  type: string;
  data: { npcObjectId: number; html: string; questId: number };
  once: boolean;
};
export declare type EPartySpelled = { type: string; data: { creature: L2Creature }; once: boolean };

// Events
export declare type OnLoggedIn = ["LoggedIn", (e: ELoggedIn) => void];
export declare type OnPlayOk = ["PlayOk", () => void];
export declare type OnLoggedInEvent = ["LoggedIn", () => void];
export declare type OnPacketReceivedEvent = ["PacketReceived", string, (e: EPacketReceived) => void];
export declare type OnPacketSentEvent = ["PacketSent", string, (e: EPacketSent) => void];
export declare type OnPartyRequestEvent = ["PartyRequest", (e: EPartyRequest) => void];
export declare type OnDieEvent = ["Die", (e: EDie) => void];
export declare type OnTargetSelectedEvent = ["TargetSelected", (e: ETargetSelected) => void];
export declare type OnMyTargetSelectedEvent = ["MyTargetSelected", (e: EMyTargetSelected) => void];
export declare type OnAttackedEvent = ["Attacked", (e: EAttacked) => void];
export declare type OnRequestedDuelEvent = ["RequestedDuel", (e: ERequestedDuel) => void];
export declare type OnStartMovingEvent = ["StartMoving", (e: EStartMoving) => void];
export declare type OnStopMovingEvent = ["StopMoving", (e: EStopMoving) => void];
export declare type OnCraftResultEvent = ["CraftResult", (e: ECraftResult) => void];
export declare type OnRecipeBookEvent = ["RecipeBook", (e: ERecipeBook) => void];
export declare type OnPartySmallWindow = ["PartySmallWindow", (e: EPartySmallWindow) => void];
export declare type OnPartyMemberPosition = ["PartyMemberPosition", (e: EPartyMemberPosition) => void];
export declare type OnCharInfo = ["CharInfo", (e: ECharInfo) => void];
export declare type OnRevive = ["Revive", (e: ERevive) => void];
export declare type OnConfirmDlg = ["ConfirmDlg", (e: EConfirmDlg) => void];
export declare type OnSystemMessage = ["SystemMessage", (e: ESystemMessage) => void];
export declare type OnCreatureSay = ["CreatureSay", (e: ECreatureSay) => void];
export declare type OnNpcHtmlMessage = ["NpcHtmlMessage", (e: ENpcHtmlMessage) => void];
export declare type OnNpcQuestHtmlMessage = ["NpcQuestHtmlMessage", (e: ENpcQuestHtmlMessage) => void];
export declare type OnPartySpelled = ["PartySpelled", (e: EPartySpelled) => void];

// prettier-ignore
export declare type EventHandlerType =
  OnLoggedIn
  | OnLoggedInEvent
  | OnPacketReceivedEvent
  | OnPacketSentEvent
  | OnPartyRequestEvent
  | OnDieEvent
  | OnTargetSelectedEvent
  | OnMyTargetSelectedEvent
  | OnAttackedEvent
  | OnRequestedDuelEvent
  | OnStartMovingEvent
  | OnStopMovingEvent
  | OnCraftResultEvent
  | OnPartySmallWindow
  | OnPartyMemberPosition
  | OnCharInfo
  | OnRevive
  | OnConfirmDlg
  | OnSystemMessage
  | OnCreatureSay
  | OnRecipeBookEvent
  | OnNpcHtmlMessage
  | OnNpcQuestHtmlMessage
  | OnPartySpelled;
