import L2Creature from "../entities/L2Creature";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import MMOClient from "../mmocore/MMOClient";
import SendablePacket from "../mmocore/SendablePacket";

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

// Events
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

// prettier-ignore
export declare type EventHandlerType =
  OnLoggedInEvent
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
  | OnRecipeBookEvent;
