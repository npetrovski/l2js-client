import L2Creature from "../entities/L2Creature";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import MMOClient from "../mmocore/MMOClient";
import SendablePacket from "../mmocore/SendablePacket";

export declare type OnPacketReceived = { packet: ReceivablePacket<MMOClient> };
export declare type OnPacketSent = { packet: SendablePacket<MMOClient> };
export declare type OnPartyRequest = { requestorName: string; partyDistributionType: number };
export declare type OnDie = { creature: L2Creature; isSpoiled: boolean };
export declare type OnTargetSelected = { objectId: number; targetObjectId: number; targetLocation: number[] };
export declare type OnMyTargetSelected = { objectId: number };
export declare type OnAttacked = { object: number; subjects: number[] };
export declare type OnRequestedDuel = { requestorName: string };
export declare type OnStartMoving = { creature: L2Creature };
export declare type OnStopMoving = { creature: L2Creature };
