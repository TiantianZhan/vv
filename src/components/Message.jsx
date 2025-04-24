import React from "react";
import "../styles/Message.css";
import MessageFromUser from "./MessageFromUser";
import MessageFromBot from "./MessageFromBot";
import MessageType from "../enums/MessageTypes.js";
import MessageSystemNotif from "./MessageSystemNotif";
import EntityType from "../enums/EntityTypes";
import MessageRatingSlider from "./MessageRatingSlider";

function Message(props) {
  if (props.message.type === MessageType.System)
    return <MessageSystemNotif message={props.message} name={props.name} />;
  if (props.message.sender === EntityType.User)
    return <MessageFromUser message={props.message} />;
  if (props.message.type === MessageType.Rate)
    return (
      <MessageRatingSlider
        message={props.message}
        name={props.name}
        handleSubmitRating={props.handleSubmitRating}
      />
    );
  if (props.message.type === MessageType.Image) {
    props.displayImage(props.message.content);
    return <></>;
  }
  return <MessageFromBot message={props.message} name={props.name} />;
}

export default Message;
