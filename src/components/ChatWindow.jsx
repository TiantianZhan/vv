import { useState, useContext, useEffect, useRef } from "react";
import MessageScreen from "./MessageScreen";
import MessageInput from "./MessageInput";
import MessageType from "../enums/MessageTypes";
import EntityType from "../enums/EntityTypes";
import { messageGroupsAllBots } from "../messages";
import "../styles/ChatWindow.css";
import { firebaseConfig } from "../config/config.js";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { AuthContext } from "../contexts/contexts";
import Button from "@mui/material/Button";

import OpenAI from "openai";

function ChatWindow(props) {
  const [messages, setMessages] = useState([]);
  const [conversationStep, setConversationStep] = useState(1);
  const [blockUserMessages, setBlockUserMessages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gptConversation, setGptConversation] = useState("");
  const [lastUserMessage, setLastUserMessage] = useState("");
  const [name, setName] = useState(props.name);
  const openai = useRef(null);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const userId = useContext(AuthContext);
  const docRef = doc(db, "users", userId);

  // const allDocsRef = doc(db);
  async function getAllData() {
    const userRef = collection(db, "users");
    let userDocs = await getDocs(userRef);
    userDocs.forEach(async (doc) => {
      const id = doc.id;
      if (id.length < 20 && id !== "Q528D") return;
      const docRef = collection(db, "users", id, "messages");
      const docSnap = await getDocs(docRef);
      let str = id;
      docSnap.docs.forEach((doc) => {
        if (parseInt(doc.id) == 1) str += `\t${doc.data().message}`;
        // console.log(id, ",", doc.id, ",", doc.data().message);
      });
      docSnap.docs.forEach((doc) => {
        if (parseInt(doc.id) > 1 && parseInt(doc.id) < 10)
          str += `\t${doc.data().message}`;
        // console.log(id, ",", doc.id, ",", doc.data().message);
      });
      docSnap.docs.forEach((doc) => {
        if (parseInt(doc.id) >= 10) str += `\t${doc.data().message}`;
        // console.log(id, ",", doc.id, ",", doc.data().message);
      });
      console.log(str);
    });
  }

  const messageGroups = messageGroupsAllBots[props.code];

  useEffect(() => {
    const fetchKey = async () => {
      const docSnap = await getDoc(doc(db, "config", "config"));
      const key = "sk-XX";

      openai.current = new OpenAI({
        apiKey: key,
        dangerouslyAllowBrowser: true,
      });
    };

    fetchKey();
  }, []);

  async function getGPTMessage(prompt, userMessage) {
    try {
      const req = {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: userMessage.toString() },
        ],
        temperature: 0.01,
        max_tokens: 200,
      };
      console.log(req);
      const response = await openai.current.chat.completions.create(req);
      const response_content = response.choices[0].message.content;
      return response_content;
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  async function gptParseName(message) {
    try {
      const req = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `The message below is the user introducing themself. Return just the user's name, with no other words.`,
          },
          { role: "user", content: message },
        ],
        temperature: 0.0,
        max_tokens: 200,
      };
      console.log(req);
      const response = await openai.chat.current.completions.create(req);
      const response_content = response.choices[0].message.content;
      return response_content;
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  async function getUserDataFromDatabase() {
    setIsLoading(true);
    try {
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        setIsLoading(false);
        return;
      }

      console.log("Document data:", docSnap.data());

      const messageHistory = await getDocs(
        collection(db, "users", userId, "messages")
      );
      console.log(messageHistory.docs);

      populateInitialMessages(docSnap.data().step, messageHistory.docs);
      setConversationStep(docSnap.data().step);

      // messageHistory.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  async function updateStepInDatabase(newStep) {
    // console.log("updateStep...");
    await setDoc(doc(db, "users", userId), {
      step: newStep,
    });
  }

  async function storeUserMessageInDatabase(step, message) {
    // console.log("storing user message...");
    await setDoc(doc(db, "users", userId, "messages", step.toString()), {
      message: message,
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      return await getUserDataFromDatabase();
    };

    fetchData();
    return () => setMessages([]);
  }, []);

  async function test_reset() {
    console.log("resetting...");
    await setDoc(doc(db, "users", userId), {
      step: 1,
    });
    setMessages([]);
    setConversationStep(1);
    console.log("reseted.");
  }

  async function handleAddUserMessage(message) {
    addUserMessage(message);

    if (conversationStep === 2) {
      const n = await gptParseName(message);
      setName(message);
    }

    if (!blockUserMessages) {
      // setLastUserMessage(message);
      storeUserMessageInDatabase(conversationStep, message);
      addBotMessages(conversationStep, message);
      updateStepInDatabase(conversationStep + 1);
      setConversationStep((s) => s + 1);
    }
  }

  function addUserMessage(message) {
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: message, sender: EntityType.User },
    ]);
  }

  function createConversation(fn, message) {
    console.log(gptConversation);
    return fn(message, gptConversation);
  }

  async function addBotMessages(step, lastUserMessage) {
    console.log(lastUserMessage);
    setBlockUserMessages(true); // preventing multiple user messages from breaking the flow

    if (messageGroups.filter((g) => g.step == step).length === 0) return;

    const messageGroup = messageGroups.filter((g) => g.step == step)[0]
      .messages;

    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    let tempGptConversation = gptConversation; // temp variable to ensure value updates during loop
    for (var i = 0; i < messageGroup.length; i++) {
      await timer(messageGroup[i].delay * 800); // then the created Promise can be awaited
      const message = messageGroup[i];
      if (message.type === MessageType.GPT) {
        const gptMessage = await getGPTMessage(
          message.prompt(props.name),
          lastUserMessage
        );
        message.content = () => gptMessage;
      }

      setMessages((prevMessages) => [...prevMessages, message]);
    }

    setBlockUserMessages(false);
  }

  function populateInitialMessages(step, userMessages) {
    let msgs = [];

    // for each user message
    for (let i = 1; i < step; i++) {
      // add user message
      msgs = msgs.concat({
        content: userMessages[i - 1].data().message,
        sender: EntityType.User,
      });

      // add bot messages
      if (i - 1 < messageGroups.length) {
        msgs = msgs.concat(messageGroups[i - 1].messages);
      }
    }

    setMessages(msgs);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div className="chatWindow">
        <p> Enter "start" in the input box to initiate the conversation.</p>

        <MessageScreen
          messages={messages}
          isLoading={isLoading}
          name={name}
          handleSubmitRating={handleAddUserMessage}
          addMessage={handleAddUserMessage}
          blockUserMessages={blockUserMessages}
        />
        <br />
        <br />
        <Button onClick={test_reset}>Reset</Button>
        <Button onClick={props.logoutHandler}>Logout</Button>
        <Button onClick={getAllData}>Get Data</Button>
      </div>
    </div>
  );
}

export default ChatWindow;
