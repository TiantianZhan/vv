import MessageType from "./enums/MessageTypes";
import EntityType from "./enums/EntityTypes";
import {
  bot1Name,
  bot2Name,
  bot3Name,
  bot4Name,
  bot5Name,
  bot7Name,
} from "./constants/botNames";

import { message1BotGroups } from "./messages1Bot";
import { message3BotGroups } from "./messages3Bots";
import { message5BotGroups } from "./messages5bots";
import { message7BotGroups } from "./messages7bots";

export const messageGroupsAllBots = [
  message1BotGroups,
  message3BotGroups,
  message5BotGroups,
  message7BotGroups,
];
