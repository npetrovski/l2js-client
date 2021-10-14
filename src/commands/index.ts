import CommandAcceptJoinParty from "./CommandAcceptJoinParty";
import CommandAcceptResurrect from "./CommandAcceptResurrect";
import CommandAttack from "./CommandAttack";
import CommandAutoShots from "./CommandAutoShots";
import CommandCancelBuff from "./CommandCancelBuff";
import CommandCancelTarget from "./CommandCancelTarget";
import CommandCast from "./CommandCast";
import CommandCraft from "./CommandCraft";
import CommandDeclineJoinParty from "./CommandDeclineJoinParty";
import CommandDeclineResurrect from "./CommandDeclineResurrect";
import CommandDropItem from "./CommandDropItem";
import CommandDwarvenCraftRecipes from "./CommandDwarvenCraftRecipes";
import CommandEnter from "./CommandEnter";
import CommandHit from "./CommandHit";
import CommandInventory from "./CommandInventory";
import CommandMoveTo from "./CommandMoveTo";
import CommandNextTarget from "./CommandNextTarget";
import CommandRequestDuel from "./CommandRequestDuel";
import CommandRevive from "./CommandRevive";
import CommandSay from "./CommandSay";
import CommandSayToAlly from "./CommandSayToAlly";
import CommandSayToClan from "./CommandSayToClan";
import CommandSayToParty from "./CommandSayToParty";
import CommandSayToTrade from "./CommandSayToTrade";
import CommandShout from "./CommandShout";
import CommandSitStand from "./CommandSitStand";
import CommandTell from "./CommandTell";
import CommandUseItem from "./CommandUseItem";
import CommandValidatePosition from "./CommandValidatePosition";

export default {
  enter: CommandEnter.prototype,
  say: CommandSay.prototype,
  shout: CommandShout.prototype,
  tell: CommandTell.prototype,
  sayToParty: CommandSayToParty.prototype,
  sayToClan: CommandSayToClan.prototype,
  sayToTrade: CommandSayToTrade.prototype,
  sayToAlly: CommandSayToAlly.prototype,

  moveTo: CommandMoveTo.prototype,
  hit: CommandHit.prototype,
  attack: CommandAttack.prototype,
  dropItem: CommandDropItem.prototype,
  cancelTarget: CommandCancelTarget.prototype,

  acceptJoinParty: CommandAcceptJoinParty.prototype,
  declineJoinParty: CommandDeclineJoinParty.prototype,

  nextTarget: CommandNextTarget.prototype,

  inventory: CommandInventory.prototype,
  useItem: CommandUseItem.prototype,

  requestDuel: CommandRequestDuel.prototype,

  autoShots: CommandAutoShots.prototype,

  cancelBuff: CommandCancelBuff.prototype,
  sitOrStand: CommandSitStand.prototype,

  validatePosition: CommandValidatePosition.prototype,

  cast: CommandCast.prototype,

  dwarvenCraftRecipes: CommandDwarvenCraftRecipes.prototype,

  craft: CommandCraft.prototype,

  revive: CommandRevive.prototype,

  acceptResurrect: CommandAcceptResurrect.prototype,
  declineResurrect: CommandDeclineResurrect.prototype
};
