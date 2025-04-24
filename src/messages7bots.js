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

export const message7BotGroups = [
  {
    step: 1,
    messages: [
      {
        id: 0,
        content: (name) => `bb! What do you want to say?`,
        sender: EntityType.Host,
        senderName: "老公",
        type: MessageType.Message,
        delay: 4.0,
      },
      {
        id: 1,
        content: (name) => `Anything is okay~`,
        sender: EntityType.Host,
        senderName: "老公",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 2,
    messages: [
      {
        id: 2,
        content: (name) => `嗯嗯～ 爱你宝宝！`,
        sender: EntityType.Host,
        senderName: "老公",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },

  {
    step: 2,
    messages: [
      {
        sender: EntityType.Host,
        content:
          "Okay~ It's nice to hear that. I am tired and going to sleep. You can say more to GPT now.",
        senderName: "老公",
        type: MessageType.Text,
        delay: 5,
      },
    ],
  },
  {
    step: 3,
    messages: [
      {
        sender: EntityType.Bot,
        content: "",
        senderName: "GPT-3.5",
        type: MessageType.GPT,
        delay: 5,
        prompt: (userName) => {
          return `You are a helpful assistant, user just typed something in step 2. Reply politely to them.`;
        },
      },
    ],
  },
];
