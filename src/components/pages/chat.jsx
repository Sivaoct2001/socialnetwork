import React from "react";
import "./chat.css";
import Chat from "../friends_chat/friends";
import Mediaprofile from "../myprofile/profile";
import Message from "../message/message";
const Friendschat = () => {
  return (
    <div className="recent_chat">
      <Chat />
      <Mediaprofile />
      <Message />
    </div>
  );
};
export default Friendschat;
