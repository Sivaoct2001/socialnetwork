import React from "react";
import "./message.css";
const Message = () => {
  return (
    <div className="profile_chatmessage">
      <div className="mainpage_msg">
        <div className="msg_content">
          Don't think about making art, just get it done. Let everyone else
          decide if it's good or bad, whether they love it. While they are
          deciding, make even more art.
        </div>
        <div className="msg_box">
          I found I could say things with color and shapes that I couldn't say
          any other way-things I had no words for.
        </div>
        <div className="msg_information">
          Imgination is the beginning of creation. you imagine, what you desire,
          you will what you imagine, and at last, you create what you will.
        </div>
        <div className="msg_button">
          <input type="text" placeholder="message" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
export default Message;
