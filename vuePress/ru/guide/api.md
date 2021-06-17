# API

## Объекты

```
L2Object
  |
  ├── L2Buff
  ├── L2Skill
  ├── L2Creature
  |     ├── L2PartyPet
  |     ├── L2Summon
  |     ├── L2Mob
  |     ├── L2Npc
  |     └── L2Character
  |           ├── L2User
  |           └── L2PartyMember
  ├── L2Mail
  ├── L2Recipe
  └── L2Item
        └── L2DroppedItem
```

## Команды

| Команда             | Что делает ?                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| say                 | Отправить общее сообщение                                                                       |
| shout               | Выкрикивать в шаут                                                                              |
| tell                | Отправьте сообщение в личку                                                                     |
| sayToParty          | Отправить сообщениев груповой чат                                                               |
| sayToClan           | Отправить сообщение в клан чат                                                                  |
| sayToTrade          | Отправить сообщение в торговый чат                                                              |
| sayToAlly           | Отправить сообщение в чат альянса                                                               |
| moveTo              | Перемещение персонажа по локации (x, yx z)                                                      |
| hit                 | Взять в таргет. Принимает объект L2Object или ObjectId                                          |
| attack              | Атаковать цель в таргете. Принимает объект L2Object или ObjectId                                |
| cancelTarget        | Отменить таргет                                                                                 |
| acceptJoinParty     | Принять приглашение в группу                                                                    |
| declineJoinParty    | Отклонить приглашение в группу                                                                  |
| nextTarget          | nextTarget, выбрать следущюю ближайшую цель                                                     |
| inventory           | Получить список содержимого в инвентаре                                                         |
| useItem             | Использовать предмет. Принимает объект `L2Item` или `ObjectId`                                  |
| requestDuel         | Запрос дуэли, если таргет не указан, пытается кинуть друэль блажайшей целе                      |
| autoShots           | Включить/Открючить соски                                                                        |
| cancelBuff          | Снять баф                                                                                       |
| sitOrStand          | Сесть/Встать                                                                                    |
| validatePosition    | Синхронизация позиции с сервером                                                                |
| dwarvenCraftRecipes | Открыть книгу рецептов крафта                                                                   |
| craft               | Крафт                                                                                           |

## Ивенты

| Тип Ивента          | Event Data Type                                                                                            | Что делает?                          |
| ------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| LoggedIn            | void                                                                                                       | Авторизовался в игре                 |
| PacketReceived      | [EPacketReceived](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L6)       | пакет получен                        |
| PacketSent          | [EPacketSent](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L7)           | пакет отправлен                      |
| PartyRequest        | [EPartyRequest](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L8)         | Пришел запрос на вступление в группу |
| Die                 | [EDie](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L13)                 | L2Creature цель мертва               |
| TargetSelected      | [ETargetSelected](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L14)      | L2Creature Цель взята в таргет       |
| MyTargetSelected    | [EMyTargetSelected](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L19)    | Взял сам себя в таргет               |
| Attacked            | [EAttacked](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L20)            | L2User атакованые существа           |
| RequestedDuel       | [ERequestedDuel](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L21)       | Получен запрос на дуэль              |
| StartMoving         | [EStartMoving](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L22)         | L2Creature цель начала перемещение   |
| StopMoving          | [EStopMoving](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L23)          | L2Creature перемещение остановлено   |
| CraftResult         | [ECraftResult](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L24)         | Результат создания предмета (Крафт)  |
| RecipeBook          | [ERecipeBook](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L25)          | Использован рецепт из книги рецептов |
| PartySmallWindow    | [EPartySmallWindow](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L30)    | Обновленно маленькое окно группы     |
| PartyMemberPosition | [EPartyMemberPosition](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L35) | Позиция игрока в групе - изменилась  |
| CharInfo            | [ECharInfo](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L36)            | Информация о персонаже               |
| Revive              | [ERevive](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L37)              | Цель возрадилась                     |
| ConfirmDlg          | [EConfirmDlg](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L38)          | Диалог принят                        |
| SystemMessage       | [ESystemMessage](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L43)       | Серверное системное сообщение        |
| CreatureSay         | [ECreatureSay](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L44)         | Существо говорит                     |
| NpcHtmlMessage      | [ENpcHtmlMessage](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L49)      | получение HTML от NPC                |
| NpcQuestHtmlMessage | [ENpcQuestHtmlMessage](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L54) | получение квеста HTML у NPC          |

