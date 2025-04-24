import React, { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import CircularProgress from "@mui/material/CircularProgress";
import MessageInput from "./MessageInput";
import Message from "./Message.jsx";
import "../styles/MessageScreen.css";

function MessageScreen(props) {
  let [imagePath, setImagePath] = useState("placeholder.jpeg");

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="messageImage">
        <img src={`/images/${imagePath}`} width="250" height="250" />
      </div>
      <div>
        <div className="messageScreen">
          <SimpleBar style={{ height: 400, width: 600 }}>
            <div className={"messageListWrapper"}>
              {props.isLoading ? (
                <CircularProgress />
              ) : (
                props.messages.map((msg) => (
                  <Message
                    message={msg}
                    key={msg.id}
                    name={props.name}
                    handleSubmitRating={props.handleSubmitRating}
                    displayImage={(path) => setImagePath(path)}
                  />
                ))
              )}
              <div ref={messagesEndRef} />
            </div>
          </SimpleBar>
        </div>
        <MessageInput
          addMessage={props.addMessage}
          blockUserMessages={props.blockUserMessages}
        />
      </div>
    </div>
  );
}

export default MessageScreen;
