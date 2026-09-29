import IPacketHandler from "../mmocore/IPacketHandler";
import Logger from "../mmocore/Logger";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import GameClient from "./GameClient";
import * as Packets from "./incoming/game/index";
import { EXTENDED_SERVER_PACKET_NAMES, SERVER_PACKET_NAMES } from "./ServerPacketNames";

export default class GamePacketHandler implements IPacketHandler<GameClient> {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  // @Override
  handlePacket(data: Uint8Array): ReceivablePacket {
    const opcode: number = data[0] & 0xff;

    let rpk!: ReceivablePacket;

    try {
      switch (opcode) {
        case 0x00:
          rpk = new Packets.x00_Die();
          break;
        case 0x01:
          rpk = new Packets.x01_Revive();
          break;
        case 0x02:
          rpk = new Packets.x02_PlayerInGame();
          break;
        case 0x05:
          rpk = new Packets.x05_SpawnItem();
          break;
        case 0x08:
          rpk = new Packets.x08_DeleteObject();
          break;
        case 0x09:
          rpk = new Packets.x09_CharSelectionInfo();
          break;
        case 0x0a:
          rpk = new Packets.x0A_LoginFail();
          break;
        case 0x0b:
          rpk = new Packets.x0B_CharSelected();
          break;
        case 0x0c:
          rpk = new Packets.x0C_NpcInfo();
          break;
        case 0x0d:
          rpk = new Packets.x0D_NewCharacterSuccess();
          break;
        case 0x0f:
          rpk = new Packets.x0F_CharCreateOk();
          break;
        case 0x10:
          rpk = new Packets.x10_CharCreateFail();
          break;
        case 0x11:
          rpk = new Packets.x11_ItemList();
          break;
        case 0x12:
          rpk = new Packets.x12_SunRise();
          break;
        case 0x13:
          rpk = new Packets.x13_SunSet();
          break;
        case 0x14:
          rpk = new Packets.x14_TradeStart();
          break;
        case 0x16:
          rpk = new Packets.x16_DropItem();
          break;
        case 0x17:
          rpk = new Packets.x17_GetItem();
          break;
        case 0x18:
          rpk = new Packets.x18_StatusUpdate();
          break;
        case 0x19:
          rpk = new Packets.x19_NpcHtmlMessage();
          break;
        case 0x20:
          rpk = new Packets.x20_ServerClose();
          break;
        case 0x1a:
          rpk = new Packets.x1A_TradeOwnAdd();
          break;
        case 0x1b:
          rpk = new Packets.x1B_TradeOtherAdd();
          break;
        case 0x1c:
          rpk = new Packets.x1C_TradeDone();
          break;
        case 0x1f:
          rpk = new Packets.x1F_ActionFailed();
          break;
        case 0x21:
          rpk = new Packets.x21_InventoryUpdate();
          break;
        case 0x22:
          rpk = new Packets.x22_TeleportToLocation();
          break;
        case 0x23:
          rpk = new Packets.x23_TargetSelected();
          break;
        case 0x24:
          rpk = new Packets.x24_TargetUnselected();
          break;
        case 0x25:
          rpk = new Packets.x25_AutoAttackStart();
          break;
        case 0x26:
          rpk = new Packets.x26_AutoAttackStop();
          break;
        case 0x27:
          rpk = new Packets.x27_SocialAction();
          break;
        case 0x28:
          rpk = new Packets.x28_ChangeMoveType();
          break;
        case 0x29:
          rpk = new Packets.x29_ChangeWaitType();
          break;
        case 0x2e:
          rpk = new Packets.x2E_KeyPacket();
          break;
        case 0x2f:
          rpk = new Packets.x2F_MoveToLocation();
          break;
        case 0x30:
          rpk = new Packets.x30_NpcSay();
          break;
        case 0x31:
          rpk = new Packets.x31_CharInfo();
          break;
        case 0x32:
          rpk = new Packets.x32_UserInfo();
          break;
        case 0x33:
          rpk = new Packets.x33_Attack();
          break;
        case 0x39:
          rpk = new Packets.x39_AskJoinParty();
          break;
        case 0x3a:
          rpk = new Packets.x3A_JoinParty();
          break;
        case 0x41:
          rpk = new Packets.x41_WareHouseDepositList();
          break;
        case 0x42:
          rpk = new Packets.x42_WareHouseWithdrawalList();
          break;
        case 0x44:
          rpk = new Packets.x44_ShortCutRegister();
          break;
        case 0x45:
          rpk = new Packets.x45_ShortCutInit();
          break;
        case 0x47:
          rpk = new Packets.x47_StopMove();
          break;
        case 0x48:
          rpk = new Packets.x48_MagicSkillUse();
          break;
        case 0x4a:
          rpk = new Packets.x4A_CreatureSay();
          break;
        case 0x4b:
          rpk = new Packets.x4B_EquipUpdate();
          break;
        case 0x4e:
          rpk = new Packets.x4E_PartySmallWindowAll();
          break;
        case 0x4f:
          rpk = new Packets.x4F_PartySmallWindowAdd();
          break;
        case 0x50:
          rpk = new Packets.x50_PartySmallWindowDeleteAll();
          break;
        case 0x51:
          rpk = new Packets.x51_PartySmallWindowDelete();
          break;
        case 0x52:
          rpk = new Packets.x52_PartySmallWindowUpdate();
          break;
        case 0x54:
          rpk = new Packets.x54_MagicSkillLaunched();
          break;
        case 0x5f:
          rpk = new Packets.x5F_SkillList();
          break;
        case 0x60:
          rpk = new Packets.x60_VehicleInfo();
          break;
        case 0x61:
          rpk = new Packets.x61_StopRotation();
          break;
        case 0x62:
          rpk = new Packets.x62_SystemMessage();
          break;
        case 0x63:
          rpk = new Packets.x63_StartPledgeWar();
          break;
        case 0x65:
          rpk = new Packets.x65_StopPledgeWar();
          break;
        case 0x67:
          rpk = new Packets.x67_SurrenderPledgeWar();
          break;
        case 0x6b:
          rpk = new Packets.x6B_SetupGauge();
          break;
        case 0x6c:
          rpk = new Packets.x6C_VehicleDeparture();
          break;
        case 0x6d:
          rpk = new Packets.x6D_VehicleCheckLocation();
          break;
        case 0x70:
          rpk = new Packets.x70_SendTradeRequest();
          break;
        case 0x71:
          rpk = new Packets.x71_RestartResponse();
          break;
        case 0x72:
          rpk = new Packets.x72_MoveToPawn();
          break;
        case 0x73:
          rpk = new Packets.x73_SSQInfo();
          break;
        case 0x75:
          rpk = new Packets.x75_FriendList();
          break;
        case 0x79:
          rpk = new Packets.x79_ValidateLocation();
          break;
        case 0x7a:
          rpk = new Packets.x7A_StartRotation();
          break;
        case 0x7b:
          rpk = new Packets.x7B_ShowBoard();
          break;
        case 0x7f:
          rpk = new Packets.x7F_StopMoveInVehicle();
          break;
        case 0x80:
          rpk = new Packets.x80_ValidateLocationInVehicle();
          break;
        case 0x82:
          rpk = new Packets.x82_TradeOtherDone();
          break;
        case 0x84:
          rpk = new Packets.x84_LeaveWorld();
          break;
        case 0x85:
          rpk = new Packets.x85_AbnormalStatusUpdate();
          break;
        case 0x89:
          rpk = new Packets.x89_PledgeInfo();
          break;
        case 0x9f:
          rpk = new Packets.x9F_StaticObject();
          break;
        case 0xa1:
          rpk = new Packets.xA1_PrivateStoreListSell();
          break;
        case 0xa6:
          rpk = new Packets.xA6_TutorialShowHtml();
          break;
        case 0xa7:
          rpk = new Packets.xA7_TutorialShowQuestionMark();
          break;
        case 0xa8:
          rpk = new Packets.xA8_TutorialEnableClientEvent();
          break;
        case 0xa9:
          rpk = new Packets.xA9_TutorialCloseHtml();
          break;
        case 0xb7:
          rpk = new Packets.xB7_PetDelete();
          break;
        case 0xb9:
          rpk = new Packets.xB9_MyTargetSelected();
          break;
        case 0xba:
          rpk = new Packets.xBA_PartyMemberPosition();
          break;
        case 0xc0:
          rpk = new Packets.xC0_VehicleStarted();
          break;
        case 0xc7:
          rpk = new Packets.xC7_SkillCoolTime();
          break;
        case 0xcc:
          rpk = new Packets.xCC_NicknameChanged();
          break;
        case 0xce:
          rpk = new Packets.xCE_RelationChanged();
          break;
        case 0xd6:
          rpk = new Packets.xD6_SpecialCamera();
          break;
        case 0xd7:
          rpk = new Packets.xD7_NormalCamera();
          break;
        case 0xdb:
          rpk = new Packets.xDB_Snoop();
          break;
        case 0xdc:
          rpk = new Packets.xDC_RecipeBookItemList();
          break;
        case 0xdd:
          rpk = new Packets.xDD_RecipeItemMakeInfo();
          break;
        case 0xe4:
          rpk = new Packets.xE4_HennaItemDrawInfo();
          break;
        case 0xe5:
          rpk = new Packets.xE5_HennaInfo();
          break;
        case 0xe6:
          rpk = new Packets.xE6_HennaRemoveList();
          break;
        case 0xe7:
          rpk = new Packets.xE7_HennaItemRemoveInfo();
          break;
        case 0xee:
          rpk = new Packets.xEE_HennaEquipList();
          break;
        case 0xf3:
          rpk = new Packets.xF3_ConfirmDlg();
          break;
        case 0xf4:
          rpk = new Packets.xF4_PartySpelled();
          break;
        case 0xf9:
          rpk = new Packets.xF9_EtcStatusUpdate();
          break;
        case 0xfe: {
          const sub = data[1] + (data[2] << 8);
          switch (sub) {
            case 0x1f:
              rpk = new Packets.xFE_x1F_ExFishingEnd();
              break;
            case 0x22:
              rpk = new Packets.xFE_x22_ExSendManorList();
              break;
            case 0x28:
              rpk = new Packets.xFE_x28_ExFishingHpRegen();
              break;
            case 0x2f:
              rpk = new Packets.xFE_x2F_ExStorageMaxCount();
              break;
            case 0x33:
              rpk = new Packets.xFE_x33_ExSetCompassZoneCode();
              break;
            case 0x39:
              rpk = new Packets.xFE_x39_ExShowScreenMessage();
              break;
            case 0x41:
              rpk = new Packets.xFE_x41_ExRedSky();
              break;
            case 0x4c:
              rpk = new Packets.xFE_x4C_ExDuelAskStart();
              break;
            case 0x70:
              rpk = new Packets.xFE_x70_ExUISetting();
              break;
            case 0x8d:
              rpk = new Packets.xFE_x8D_NpcQuestHtmlMessage();
              break;
            case 0xc1:
              rpk = new Packets.xFE_xC1_ExRotation();
              break;
            case 0xc6:
              rpk = new Packets.xFE_xC6_ExQuestItemList();
              break;
            case 0xc9:
              rpk = new Packets.xFE_xC9_ExVoteSystemInfo();
              break;
            case 0xd3:
              rpk = new Packets.xFE_xD3_ExShowContactList();
              break;
            case 0xda:
              rpk = new Packets.xFE_xDA_ExBrExtraUserInfo();
              break;
            case 0xdf:
              rpk = new Packets.xFE_xDF_ExNevitAdventPointInfoPacket();
              break;
            case 0xe1:
              rpk = new Packets.xFE_xE1_ExNevitAdventTimeChange();
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
        const subOpcode = opcode === 0xfe && data.byteLength >= 3 ? data[1] + (data[2] << 8) : undefined;
        const packetNames =
          subOpcode === undefined ? SERVER_PACKET_NAMES[opcode] : EXTENDED_SERVER_PACKET_NAMES[subOpcode];

        if (packetNames) {
          rpk = new Packets.RawGamePacket(opcode, packetNames, subOpcode);
        }
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
        } else {
          this.logger.debug("Unknown game packet received.");
        }
      } else {
        rpk.Buffer = data;
      }
    } catch (err) {
      this.logger.error(err);
    }

    return rpk;
  }
}
