import React from "react";
import personone from "../../assets/images/user_one.jpeg";
import persontwo from "../../assets/images/user_two.jpeg";
import personthree from "../../assets/images/user_three.jpeg";
import personfour from "../../assets/images/user_four.jpeg";
import personfive from "../../assets/images/user_five.jpeg";
import personsix from "../../assets/images/user_six.jpeg";
import "./friends.css";
const Chat = () => {
  const Friendslist = [
    {
      Icon: personone,
      Name: "William",
      Job: "Artist",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit. Doner doler teells ut lacinia...",
    },
    {
      Icon: persontwo,
      Name: "Siva",
      Job: "Web Developer",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit. Doner doler teells ut lacinia...",
    },
    {
      Icon: personthree,
      Name: "Ganesh",
      Job: "Teacher",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit. Doner doler teells ut lacinia...",
    },
    {
      Icon: personfour,
      Name: "Magesh",
      Job: "Doctor",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit. Doner doler teells ut lacinia...",
    },
    {
      Icon: personfive,
      Name: "Dinesh",
      Job: "Hacker",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit. Doner doler teells ut lacinia...",
    },
    {
      Icon: personsix,
      Name: "Naveen",
      Job: "Web Developer",
      Bio: "Lorem ipsum dolor sit amet, consecteture adipiscing elit. Doner doler teells ut lacinia...",
    },
  ];
  const RenderChat = Friendslist.map((chatgroup) => {
    return (
      <div className="groupchat">
        <div className="chat_icon">
          <img src={chatgroup.Icon} alt="" />
        </div>
        <div className="chat_content">
          <div className="chat_name">
            <h2>{chatgroup.Name}</h2>
            <p>{chatgroup.Job}</p>
          </div>
          <p>{chatgroup.Bio}</p>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="chat_hero">
        <h1>Recent Chats</h1>
        <div className="chat_card">{RenderChat}</div>
      </div>
    </React.Fragment>
  );
};
export default Chat;
