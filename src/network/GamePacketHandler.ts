import IPacketHandler from "../mmocore/IPacketHandler";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import Logger from "../mmocore/Logger";
import GameClient from "./GameClient";
import * as Packets from "./incoming/game/index";

export default class GamePacketHandler implements IPacketHandler<GameClient> {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  // @Override
  handlePacket(data: Uint8Array, client: GameClient): ReceivablePacket {
    const opcode: number = data[0] & 0xff;

    let rpk!: ReceivablePacket;

    try {
      switch (opcode) {
        case 0x00:
          rpk = new Packets.KeyPacket();
          break;
        case 0x01:
          rpk = new Packets.MoveToLocation();
          break;
        case 0x02:
          rpk = new Packets.PlayerInGame();
          break;
        case 0x04:
            rpk = new Packets.UserInfo();
            break;
        case 0x05:
          rpk = new Packets.SpawnItem();
          break;
        case 0x06:
          rpk = new Packets.Die();
          break;
        case 0x08:
          rpk = new Packets.DeleteObject();
          break;
        case 0x0a:
          rpk = new Packets.TempBan();
          break;
        case 0x15:
          this.logger.info("Got char selected packet")
          rpk = new Packets.CharSelected();
          break;
        case 0x0c:
          rpk = new Packets.NpcInfo();
          break;
        case 0x11:
          rpk = new Packets.ItemList();
          break;
        case 0x12:
          rpk = new Packets.SunRise();
          break;
        case 0x13:
          rpk = new Packets.CharSelectionInfo();
          break;
        case 0x14:
          rpk = new Packets.TradeStart();
          break;
        case 0x16:
          rpk = new Packets.DropItem();
          break;
        case 0x17:
          rpk = new Packets.GetItem();
          break;
        case 0x18:
          rpk = new Packets.StatusUpdate();
          break;
        case 0x19:
          rpk = new Packets.NpcHtmlMessage();
          break;
        case 0x20:
          rpk = new Packets.ServerClose();
          break;
        case 0x1a:
          rpk = new Packets.TradeOwnAdd();
          break;
        case 0x1b:
          rpk = new Packets.TradeOtherAdd();
          break;
        case 0x1c:
          rpk = new Packets.TradeDone();
          break;
        case 0x1f:
          rpk = new Packets.ActionFailed();
          break;
        case 0x21:
          rpk = new Packets.InventoryUpdate();
          break;
        case 0x22:
          rpk = new Packets.TeleportToLocation();
          break;
        case 0x23:
          rpk = new Packets.TargetSelected();
          break;
        case 0x24:
          rpk = new Packets.TargetUnselected();
          break;
        case 0x25:
          rpk = new Packets.AutoAttackStart();
          break;
        case 0x26:
          rpk = new Packets.AutoAttackStop();
          break;
        case 0x27:
          rpk = new Packets.SocialAction();
          break;
        case 0x28:
          rpk = new Packets.ChangeMoveType();
          break;
        case 0x29:
          rpk = new Packets.ChangeWaitType();
          break;
        case 0x2d:
            //Social action
            this.logger.info("Social action");
            break;
        case 0x2e:
          rpk = new Packets.KeyPacket();
          break;
        case 0x2f:
          rpk = new Packets.MoveToLocation();
          break;
        case 0x30:
          rpk = new Packets.NpcSay();
          break;
        case 0x31:
          rpk = new Packets.CharInfo();
          break;
        case 0x33:
          rpk = new Packets.Attack();
          break;
        case 0x39:
          rpk = new Packets.AskJoinParty();
          break;
        case 0x3a:
          rpk = new Packets.JoinParty();
          break;
        case 0x41:
          rpk = new Packets.WareHouseDepositList();
          break;
        case 0x42:
          rpk = new Packets.WareHouseWithdrawalList();
          break;
        case 0x44:
          rpk = new Packets.ShortCutRegister();
          break;
        case 0x45:
          rpk = new Packets.ShortCutInit();
          break;
        case 0x47:
          rpk = new Packets.StopMove();
          break;
        case 0x48:
          rpk = new Packets.MagicSkillUse();
          break;
        case 0x4a:
          rpk = new Packets.CreatureSay();
          break;
        case 0x4b:
          rpk = new Packets.EquipUpdate();
          break;
        case 0x4e:
          rpk = new Packets.PartySmallWindowAll();
          break;
        case 0x4f:
          rpk = new Packets.PartySmallWindowAdd();
          break;
        case 0x50:
          rpk = new Packets.PartySmallWindowDeleteAll();
          break;
        case 0x51:
          rpk = new Packets.PartySmallWindowDelete();
          break;
        case 0x52:
          rpk = new Packets.PartySmallWindowUpdate();
          break;
        case 0x54:
          rpk = new Packets.MagicSkillLaunched();
          break;
        case 0x5f:
          rpk = new Packets.SkillList();
          break;
        case 0x60:
          rpk = new Packets.VehicleInfo();
          break;
        case 0x61:
          rpk = new Packets.StopRotation();
          break;
        case 0x62:
          rpk = new Packets.SystemMessage();
          break;
        case 0x63:
          rpk = new Packets.StartPledgeWar();
          break;
        case 0x65:
          rpk = new Packets.StopPledgeWar();
          break;
        case 0x67:
          rpk = new Packets.SurrenderPledgeWar();
          break;
        case 0x6b:
          rpk = new Packets.SetupGauge();
          break;
        case 0x6c:
          rpk = new Packets.VehicleDeparture();
          break;
        case 0x6d:
          rpk = new Packets.VehicleCheckLocation();
          break;
        case 0x70:
          rpk = new Packets.SendTradeRequest();
          break;
        case 0x71:
          rpk = new Packets.RestartResponse();
          break;
        case 0x72:
          rpk = new Packets.MoveToPawn();
          break;
        case 0x73:
          rpk = new Packets.SSQInfo();
          break;
        case 0x75:
          rpk = new Packets.FriendList();
          break;
        case 0x79:
          rpk = new Packets.ValidateLocation();
          break;
        case 0x7a:
          rpk = new Packets.StartRotation();
          break;
        case 0x7b:
          rpk = new Packets.ShowBoard();
          break;
        case 0x7f:
          rpk = new Packets.StopMoveInVehicle();
          break;
        case 0x80:
          rpk = new Packets.ValidateLocationInVehicle();
          break;
        case 0x82:
          rpk = new Packets.TradeOtherDone();
          break;
        case 0x84:
          rpk = new Packets.LeaveWorld();
          break;
        case 0x85:
          rpk = new Packets.AbnormalStatusUpdate();
          break;
        case 0x89:
          rpk = new Packets.PledgeInfo();
          break;
        case 0x9f:
          rpk = new Packets.StaticObject();
          break;
        case 0xa1:
          rpk = new Packets.PrivateStoreListSell();
          break;
        case 0xa6:
          rpk = new Packets.TutorialShowHtml();
          break;
        case 0xa7:
          rpk = new Packets.TutorialShowQuestionMark();
          break;
        case 0xa8:
          rpk = new Packets.TutorialEnableClientEvent();
          break;
        case 0xa9:
          rpk = new Packets.TutorialCloseHtml();
          break;
        case 0xb7:
          rpk = new Packets.PetDelete();
          break;
        case 0xb9:
          rpk = new Packets.MyTargetSelected();
          break;
        case 0xba:
          rpk = new Packets.PartyMemberPosition();
          break;
        case 0xc0:
          rpk = new Packets.VehicleStarted();
          break;
        case 0xc7:
          rpk = new Packets.SkillCoolTime();
          break;
        case 0xcc:
          rpk = new Packets.NicknameChanged();
          break;
        case 0xce:
          rpk = new Packets.RelationChanged();
          break;
        case 0xd6:
          rpk = new Packets.SpecialCamera();
          break;
        case 0xd7:
          rpk = new Packets.NormalCamera();
          break;
        case 0xdb:
          rpk = new Packets.Snoop();
          break;
        case 0xdc:
          rpk = new Packets.RecipeBookItemList();
          break;
        case 0xdd:
          rpk = new Packets.RecipeItemMakeInfo();
          break;
        case 0xe4:
          rpk = new Packets.HennaItemDrawInfo();
          break;
        case 0xe5:
          rpk = new Packets.HennaInfo();
          break;
        case 0xe6:
          rpk = new Packets.HennaRemoveList();
          break;
        case 0xe7:
          rpk = new Packets.HennaItemRemoveInfo();
          break;
        case 0xee:
          rpk = new Packets.HennaEquipList();
          break;
        case 0xf3:
          rpk = new Packets.ConfirmDlg();
          break;
        case 0xf4:
          rpk = new Packets.PartySpelled();
          break;
        case 0xf9:
          rpk = new Packets.EtcStatusUpdate();
          break;
        case 0xfe: {
          const sub = data[1] + (data[2] << 8);
          switch (sub) {
            case 0x1f:
              rpk = new Packets.ExFishingEnd();
              break;
            case 0x22:
              rpk = new Packets.ExSendManorList();
              break;
            case 0x28:
              rpk = new Packets.ExFishingHpRegen();
              break;
            case 0x2f:
              rpk = new Packets.ExStorageMaxCount();
              break;
            case 0x33:
              rpk = new Packets.ExSetCompassZoneCode();
              break;
            case 0x39:
              rpk = new Packets.ExShowScreenMessage();
              break;
            case 0x41:
              rpk = new Packets.ExRedSky();
              break;
            case 0x4c:
              rpk = new Packets.ExDuelAskStart();
              break;
            case 0x70:
              rpk = new Packets.ExUISetting();
              break;
            case 0x8d:
              rpk = new Packets.NpcQuestHtmlMessage();
              break;
            case 0xc1:
              rpk = new Packets.ExRotation();
              break;
            case 0xc6:
              rpk = new Packets.ExQuestItemList();
              break;
            case 0xc9:
              rpk = new Packets.ExVoteSystemInfo();
              break;
            case 0xd3:
              rpk = new Packets.ExShowContactList();
              break;
            case 0xda:
              rpk = new Packets.ExBrExtraUserInfo();
              break;
            case 0xdf:
              rpk = new Packets.ExNevitAdventPointInfoPacket();
              break;
            case 0xe1:
              rpk = new Packets.ExNevitAdventTimeChange();
              break;

            default:
              this.logger.info("Unknow subpacket " + opcode)
              break;
          }
          break;
        }
        default:
          this.logger.info("Unknow packet " + opcode)
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
