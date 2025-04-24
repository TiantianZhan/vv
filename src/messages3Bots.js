import MessageType from "./enums/MessageTypes";
import EntityType from "./enums/EntityTypes";
import {
  bot1Name,
  bot2Name,
  bot3Name,
  bot4Name,
  bot5Name,
} from "./constants/botNames";

export const message3BotGroups = [
  {
    step: 1,
    messages: [
      {
        sender: EntityType.Bot,
        content: "Hi there! Please type anything to continue.",
        // 普通文本，不走 GPT
        type: MessageType.Text,
        delay: 1,
      },
    ],
  },
  // Step 2: 等待用户输入后，(其实在后续 handleAddUserMessage() 会处理)
  // Step 3: Bot 用 GPT 回复
  {
    step: 2,
    messages: [
      // 这里可以让 Bot 说一些“思考中的话”或者静默；你也可以不写这步
      // 如果你想在 Step=2 里就看 Bot 先说点什么，也可以加一个 Bot 的提示
      {
        sender: EntityType.Bot,
        content: "Okay, let me think for a second...",
        type: MessageType.Text,
        delay: 1,
      },
    ],
  },
  {
    step: 3,
    messages: [
      // 这里用 GPT
      {
        sender: EntityType.Bot,
        content: "", // 将在代码里动态赋值
        type: MessageType.GPT, // 表明要走 GPT 逻辑
        delay: 1,
        prompt: (userName) => {
          // prompt 可以是固定文本或使用 name 拼装
          return `You are a helpful assistant, user just typed something in step 2. Reply politely to them.`;
        },
      },
    ],
  },
];
