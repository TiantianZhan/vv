import MessageType from "./enums/MessageTypes";
import EntityType from "./enums/EntityTypes";
import {
  bot1Name,
  bot2Name,
  bot3Name,
  bot4Name,
  bot5Name,
} from "./constants/botNames";

export const message1BotGroups = [
  {
    step: 1,
    messages: [
      {
        id: 0,
        content: (name) =>
          `Hello and a very warm welcome to everyone joining us today! I'll be your host for this discussion.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 4.0,
      },
      {
        id: 1,
        content: (name) =>
          `How may we address you? Please just input your name.`,
        sender: EntityType.Host,
        senderName: "Host",
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
        content: (name) => `Nice to meet you, ${name}`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 3,
        content: (name) =>
          `In this task, we'll be discussing two important social topics. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 4.0,
      },
      {
        id: 4,
        content: (name) =>
          `I'd love for you to share your thoughts on each topic, focusing in particular on your stance and reasoning.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 6.0,
      },
      {
        id: 5,
        content: (name) =>
          `In what follows, you'll talk with a chatbot named Cody about your thoughts on the two topics.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 7.0,
      },
      {
        id: 6,
        content: (name) => `Let's all introduce ourselves!`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 7.0,
      },
      {
        id: 7,
        content: (name) => `Hi ${name}, my name is Cody. Nice to meet you! 😊`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 3.0,
      },
      {
        id: 8,
        content: (name) =>
          `${name}, could you please give a brief introduction of yourself in a single sentence?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 3,
    messages: [
      {
        id: 9,
        content: (name) =>
          `Thanks ${name}! Now that we know each other, we'll take turns to discuss our thoughts on these social issues.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 10,
        content: (name) =>
          `The first topic is this - “Self-driving cars should be allowed on all public roads”. From what I know, Cody is really into this topic.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 8.0,
      },
      {
        id: 11,
        content: (name) => `Cody, what do you think of it?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 12,
        content: (name) =>
          `You're right! I think self-driving cars are great! You can sit back, relax, and let the car do the work for you. `,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 7.0,
      },
      {
        id: 13,
        content: (name) =>
          `If you're stuck in a long and tedious traffic jam, self-driving cars make things so much less stressful.`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 8.0,
      },
      {
        id: 14,
        content: (name) =>
          `Also, many people think self-driving cars are dangerous, but many studies have shown that autonomous cars in fact have a much lower accident rate than human drivers.`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 8.0,
      },
      {
        id: 15,
        content: (name) => `That sounds appealing. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 3.0,
      },
      {
        id: 16,
        content: (name) =>
          `What do you think, ${name}? How would you use your time if you didn't have to focus on driving?`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 4,
    messages: [
      {
        id: 17,
        prompt: (name) =>
          ` Pretend you are a person named "Cody" who is talking to a user on topic about self-driving. Give a reply of around 20 words acknowledging the user's opinion on what they like and/or don't like. Don't ask questions `,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 18,
        content: (name) =>
          `Self-driving cars also promise more efficiency in traffic. They can communicate with each other to optimize traffic flow, reducing congestion and travel time. `,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 7.0,
      },
      {
        id: 19,
        content: (name) =>
          `This means less time stuck in traffic jams and more time spent doing what you love.`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 7.0,
      },
      {
        id: 20,
        content: (name) =>
          `Another significant advantage of self-driving cars is their potential to improve accessibility. `,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 6.0,
      },
      {
        id: 21,
        content: (name) =>
          `For people who are unable to drive due to age, disability, or other reasons, self-driving cars could provide newfound independence and mobility. This could greatly enhance their quality of life.`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 8.0,
      },
      {
        id: 22,
        content: (name) => `That could really change our daily routines. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 23,
        content: (name) => `What does {name} think about this issue?`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 5,
    messages: [
      {
        id: 24,
        prompt: (name) =>
          ` Pretend you are a person named "Cody" who is talking to a user on topic about self-driving. Give a reply of around 20 words acknowledging the user's opinion on what they like and/or don't like. Don't ask questions `,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 25,
        content: (name) =>
          `One last point I want to mention is about navigation. Self-driving cars are also great at navigating. so you'll never get lost trying to understand GPS instructions. `,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 7.0,
      },
      {
        id: 26,
        content: (name) =>
          `All you have to do is tell the car where you want to go, and the car will do the rest!`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 6.0,
      },
      {
        id: 27,
        content: (name) => `Thanks for sharing your thoughts! `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 3.0,
      },
      {
        id: 28,
        content: (name) =>
          `${name}, how do you feel about the idea of self-driving cars solving parking issues?`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 6,
    messages: [
      {
        id: 29,
        prompt: (name) =>
          ` Pretend you are a person named "Cody" who is talking to a user on topic about self-driving. Give a reply of around 20 words acknowledging the user's opinion on what they like and/or don't like. Don't ask questions `,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 30,
        content: (name) =>
          `Additionally, ${name}, could you also rate how much you like this image? 1 represents \"Strongly dislike\" and 7 represents \"Strongly like\".`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Rate,
        delay: 5,
      },
    ],
  },
  {
    step: 7,
    messages: [
      {
        id: 31,
        content: (name) =>
          `Thanks, ${name} and Cody, for those insightful points. I hope this conversation has given you some food for thought about the future of self-driving cars.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 32,
        content: (name) =>
          `Let's move on to our next topic! The second topic is this - “Violent video games contribute to youth violence.”`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 33,
        content: (name) =>
          `What does everyone think of it? Let's start with Cody.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 34,
        content: (name) =>
          `Absolutely. This is a very important issue. Here are my thoughts on why violent video games might contribute to youth violence.`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 8.0,
      },
      {
        id: 35,
        content: (name) =>
          `First, playing violent video games can cause more aggression, bullying, and fighting among young people. Studies have shown that exposure to violent content can increase aggressive thoughts and behaviors, leading to more conflicts and physical altercations`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 8.0,
      },
      {
        id: 36,
        content: (name) =>
          `Another point to consider is that simulating violence, such as shooting guns and engaging in hand-to-hand combat in video games, can cause real-life violent behavior. The repetitive nature of these actions in games might make them seem more acceptable or normal in real life.`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 8.0,
      },
      {
        id: 37,
        content: (name) => `Got it, Cody. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 38,
        content: (name) =>
          `${name}, how do you feel about the idea that violent video games might encourage real-life violent behavior?`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 8,
    messages: [
      {
        id: 39,
        prompt: (name) =>
          ` Pretend you are a person named "Cody" who is talking to a user on topic about  “Violent video games contribute to youth violence.” Give a reply of around 20 words acknowledging the user's opinion on what they like and/or don't like. Don't ask questions `,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 40,
        content: (name) =>
          `Additionally, it's important to note that many perpetrators of mass shootings have been known to play violent video games. While it's not the sole factor, the correlation between violent gaming and such tragic events cannot be ignored.`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 8.0,
      },
      {
        id: 41,
        content: (name) =>
          `Another significant point is that violent video games can desensitize players to real-life violence. When players are constantly exposed to graphic and violent scenarios, they may become less sensitive to the suffering of others and more tolerant of violent behavior.`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 5.0,
      },
      {
        id: 42,
        content: (name) =>
          `I would certainly buy a painting like this for myself or as a gift for others.`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 7.0,
      },
      {
        id: 43,
        content: (name) => `That's a thought-provoking point, Cody. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 44,
        content: (name) =>
          `${name}, how do you feel about the idea that violent video game characters can influence children's behavior and their ability to distinguish reality from fantasy?`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 9,
    messages: [
      {
        id: 45,
        content: (name) =>
          `Thank you for sharing your thoughts, ${name}. It's been great discussing this important topic with you. I believe it's crucial to consider these points when evaluating the impact of violent videogames on youth.`,
        sender: EntityType.Bot1,
        senderName: "Cody",
        type: MessageType.Rate,
        delay: 5,
      },
      {
        id: 46,
        content: (name) =>
          `Thanks, Cody, for those insightful points. ${name}, it's been fantastic hearing your perspective as well. These discussions have certainly given us a lot to think about.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 47,
        content: (name) =>
          `That concludes our topics for today. Thank you both for a very engaging and enlightening conversation!`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
];
