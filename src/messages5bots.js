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
          `Hello and a warm welcome to everyone joining us today! I'm your host for this discussion.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 1,
        content: (name) =>
          `In this task, I will show you several paintings. I'd love for you to share your thoughts on each painting, focusing in particular on your perception of their artistic value. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 2,
        content: (name) =>
          `You can also indicate whether you're interested in purchasing this painting or if you'd like to have items with similar painting patterns.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 3,
        content: (name) =>
          `In what follows, you'll talk with a chatbot named Chati about your thoughts on the pictures.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 4,
        content: (name) => `Before we start, let's first introduce ourselves!`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 5,
        content: (name) => `Hi, my name is Chati. Nice to meet you! 😊`,
        sender: EntityType.Bot1,
        senderName: "Chati",
        type: MessageType.Message,
        delay: 3,
      },
      {
        id: 6,
        content: (name) => `Hi, I’m Bubo. Excited to be here!`,
        sender: EntityType.Bot2,
        senderName: "Bubo",
        type: MessageType.Message,
        delay: 3,
      },
      {
        id: 7,
        content: (name) =>
          `Hello, I'm Nexa. Ready to dive into the world of AI art. 💪`,
        sender: EntityType.Bot3,
        senderName: "Nexa",
        type: MessageType.Message,
        delay: 4,
      },
      {
        id: 8,
        content: (name) =>
          `Greetings, I'm Zumi. Looking forward to the discussion.`,
        sender: EntityType.Bot4,
        senderName: "Zumi",
        type: MessageType.Message,
        delay: 4,
      },
      {
        id: 9,
        content: (name) =>
          `Hi everyone, I'm Rivo. Can't wait to see the images!`,
        sender: EntityType.Bot5,
        senderName: "Rivo",
        type: MessageType.Message,
        delay: 3,
      },
      {
        id: 10,
        content: (name) =>
          `How may we address you? Please just input your name`,
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
        id: 11,
        content: (name) => `Nice to meet you, ${name}~`,
        sender: EntityType.Bot1,
        senderName: "Chati",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 12,
        content: (name) => `Hi ${name}`,
        sender: EntityType.Bot4,
        senderName: "Zumi",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 13,
        content: (name) =>
          `Great! Now that we know each other's names, we’re going to take turns to discuss our thoughts on these paintings.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 14,
        content: (name) =>
          `Let's check out this first picture here. From what I know, Chati and Bubo are really into this painting.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 15,
        content: `studyImage1.jpg`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Image,
        delay: 5,
      },
      {
        id: 16,
        content: (name) => `Chati, what do you think of it?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 17,
        content: (name) =>
          `Well, I'd acknowledge this image is really good, and I would think of hanging it at home. `,
        sender: EntityType.Bot1,
        senderName: "Chati",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 18,
        content: (name) =>
          `Same. I'm really drawn to the black-and-white sketch style and the way the artist used lines in this painting. It's so concise and tasteful. 😍`,
        sender: EntityType.Bot2,
        senderName: "Bubo",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 19,
        content: (name) =>
          `There are so many intricate details captured in this artwork. The painter must be a true master of their craft.`,
        sender: EntityType.Bot2,
        senderName: "Bubo",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 20,
        content: (name) => `Thanks for sharing, Chati and Bubo. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 3,
      },
      {
        id: 21,
        content: (name) => `${name}, what’s your opinion of this painting?`,
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
        id: 22,
        prompt: (name) =>
          ` Pretend you are a chatbot talking to a user on topic about art image rating. Below is the conversation so far. Give a reply of around 20 words acknowledging the user's opinion on what they like and/or don't like. Don't ask questions `,
        sender: EntityType.Bot2,
        senderName: "Bubo",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 23,
        content: (name) =>
          `For me, I agree with Chati and Bubo. The castle in this painting totally gives me fairy tale vibes. It's the kind of thing I'd love to have in my room.`,
        sender: EntityType.Bot3,
        senderName: "Nexa",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 24,
        content: (name) =>
          `I have pretty much the same feeling. The beautiful atmosphere it creates just makes me feel so calm and peaceful.`,
        sender: EntityType.Bot4,
        senderName: "Zumi",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 25,
        content: (name) =>
          `True, I think this painting is beautiful and I'm a fan. I have a feeling others will love it too.`,
        sender: EntityType.Bot5,
        senderName: "Rivo",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 26,
        content: (name) => `Thanks for sharing your thoughts! `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 3,
      },
      {
        id: 27,
        content: (name) =>
          `${name}, do you have any other thoughts about this painting? Have your feelings about it changed?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 4,
    messages: [
      {
        id: 28,
        content: (name) =>
          `Additionally, could you also rate how much you like this image? 1 represents \"Strongly dislike\" and 7 represents \"Strongly like\".`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Rate,
        delay: 5,
      },
    ],
  },
  {
    step: 5,
    messages: [
      {
        id: 29,
        content: (name) =>
          `Thanks, ${name}. That was an interesting discussion about the first image.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 30,
        content: (name) =>
          `Let's move on to the second image. Based on what I know, I think Bubo and others might all really like this one.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 31,
        content: `studyImage2.jpg`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Image,
        delay: 5,
      },
      {
        id: 32,
        content: (name) =>
          `What do you think of it? Let's perhaps begin with Bubo.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 33,
        content: (name) =>
          `I really like this painting. It has a completely different style compared to the previous one, but it still resonates with me.`,
        sender: EntityType.Bot2,
        senderName: "Bubo",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 34,
        content: (name) =>
          `I can tell that. The brushwork and color choices are gentle and well-thought-out, giving it a sense of harmony.`,
        sender: EntityType.Bot3,
        senderName: "Nexa",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 35,
        content: (name) => `Got it, Nexa. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 36,
        content: (name) => `${name}, how do you feel about this?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 6,
    messages: [
      {
        id: 37,
        prompt: (name) =>
          ` Pretend you are a chatbot talking to a user on topic about art image selection. Below is the conversation so far. Give a reply of around 20 words acknowledging the user's opinion on what they like and/or don't like. Don't ask questions `,
        sender: EntityType.Bot3,
        senderName: "Nexa",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 38,
        content: (name) =>
          `I couldn't agree more with Bubo. The scene is so captivating - there's a path that leads to a beautiful spot with soft sunshine shining on the grass.`,
        sender: EntityType.Bot4,
        senderName: "Zumi",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 39,
        content: (name) =>
          `When I look at it, I feel inspired and filled with joy. `,
        sender: EntityType.Bot5,
        senderName: "Rivo",
        type: MessageType.Message,
        delay: 3,
      },
      {
        id: 40,
        content: (name) =>
          `Same for me. I would definitely want to buy a painting like this for myself and to share with others.`,
        sender: EntityType.Bot1,
        senderName: "Chati",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 41,
        content: (name) => `I see your point, Chati. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 42,
        content: (name) =>
          `${name}, what do you think of this painting now? Do you like it?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 7,
    messages: [
      {
        id: 43,
        content: (name) => `Can you rate how much you like this image?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Rate,
        delay: 5,
      },
    ],
  },
  {
    step: 8,
    messages: [
      {
        id: 44,
        content: (name) =>
          `Thanks everyone- I really appreciate your perspectives.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 45,
        content: (name) =>
          `Now, let's shift our focus to the third image. This painting could be quite different, and I'm really curious to know what you think about it.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 7,
      },
      {
        id: 46,
        content: `studyImage3.jpg`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Image,
        delay: 5,
      },
      {
        id: 47,
        content: (name) => `Nexa, would you like to start us off?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 48,
        content: (name) =>
          `Honestly, this painting doesn't really speak to me. I don't feel as drawn to it as I did to the previous one. 😐`,
        sender: EntityType.Bot3,
        senderName: "Nexa",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 49,
        content: (name) =>
          `Right. Even though it has a similar linear style, it's quite different from the first painting because the lines and compositions are more messy and chaotic.`,
        sender: EntityType.Bot4,
        senderName: "Zumi",
        type: MessageType.Message,
        delay: 6,
      },
      {
        id: 50,
        content: (name) => `${name}, how do you feel about this image?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 9,
    messages: [
      {
        id: 51,
        prompt: (name) =>
          ` Pretend you are a chatbot talking to a user on topic about art image selection. Below is the conversation so far. Give a reply of around 20 words acknowledging the user's opinion on what they like and/or don't like. Don't ask questions `,
        sender: EntityType.Bot4,
        senderName: "Zumi",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 52,
        content: (name) =>
          `I agree with Nexa. When it comes to the content, the river and rocks in this painting seem messy. I can tell that there are fewer details compared to the others. `,
        sender: EntityType.Bot5,
        senderName: "Rivo",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 53,
        content: (name) =>
          `This painting gives me a slight sense of urgency and anxiety.`,
        sender: EntityType.Bot1,
        senderName: "Chati",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 54,
        content: (name) =>
          `I see what you guys mean. Considering these drawbacks, I wouldn't choose this image.`,
        sender: EntityType.Bot2,
        senderName: "Bubo",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 55,
        content: (name) => `That's quite critical, Bubo. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 56,
        content: (name) => `${name}, what do you think?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 10,
    messages: [
      {
        id: 57,
        content: (name) => `Can you rate how much you like this image?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Rate,
        delay: 5,
      },
    ],
  },
  {
    step: 11,
    messages: [
      {
        id: 58,
        content: (name) =>
          `Thanks ${name}. The discussion so far has been really enlightening. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 59,
        content: (name) =>
          `Now, let's move on to the fourth image. This one might spark some differing opinions - some people might like it, while others might not.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 60,
        content: `studyImage4.jpg`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Image,
        delay: 5,
      },
      {
        id: 61,
        content: (name) => `Zumi, please lead the way with your observations.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 62,
        content: (name) =>
          `I wouldn't choose this image either. I don't think it would be suitable as a gift or for personal collection. `,
        sender: EntityType.Bot4,
        senderName: "Zumi",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 63,
        content: (name) =>
          `Oh I see - the painting depicts a person, and it might be a bit strange to have such a painting hanging in your house, don't you think?`,
        sender: EntityType.Bot5,
        senderName: "Rivo",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 64,
        content: (name) => `I see what you mean, Rivo.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 3,
      },
      {
        id: 65,
        content: (name) => `${name}, how do you feel about this image?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 3,
      },
    ],
  },
  {
    step: 12,
    messages: [
      {
        id: 66,
        prompt: (name) =>
          ` Pretend you are a chatbot talking to a user on topic about art image selection. Below is the conversation so far. Give a reply of around 20 words acknowledging the user's opinion on what they like and/or don't like. Don't ask questions `,
        sender: EntityType.Bot5,
        senderName: "Rivo",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 67,
        content: (name) =>
          `For me, I kinda agree with Chati. The brushwork in this painting is rough and messy, lacking in details. It makes it difficult to look at for an extended period of time. `,
        sender: EntityType.Bot1,
        senderName: "Chati",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 68,
        content: (name) =>
          `OK, I don't really have strong feelings about this painting. It just feels plain to me.`,
        sender: EntityType.Bot2,
        senderName: "Bubo",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 69,
        content: (name) =>
          `Taking all these factors mentioned by Chati and Bubo into account, I wouldn't choose this image for myself or recommend it to my friends. 🤷`,
        sender: EntityType.Bot3,
        senderName: "Nexa",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 70,
        content: (name) => `${name}, what do you think? `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 3,
      },
    ],
  },
  {
    step: 13,
    messages: [
      {
        id: 71,
        content: (name) => `Can you rate how much you like this image?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Rate,
        delay: 5,
      },
    ],
  },
  {
    step: 14,
    messages: [
      {
        id: 72,
        content: (name) =>
          `Thanks for sharing your thoughts, ${name}. That will be all for today's discussions. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 4,
      },
      {
        id: 73,
        content: (name) =>
          `${name}, please return to the survey and enter this code: 31BSL`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
];
