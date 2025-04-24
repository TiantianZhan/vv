import "../styles/Message.css";

function MessageFromUser(props) {
  return (
    <div className={"message messageSent"}>
      <div className={"messageText messageTextSent"}>
        {/* <div className="messageSenderName messageSenderNameReceived">
          {props.message.sender}
        </div> */}
        <div>{props.message.content}</div>
      </div>
    </div>
  );
}

export default MessageFromUser;
