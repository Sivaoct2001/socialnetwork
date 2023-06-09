import React from "react";
import tick from "../../assets/images/tick.png";
import "./profile.css";
const Mediaprofile = () => {
  return (
    <div className="main_profile">
      <img src="" alt="" />
      <div className="profile_hero">
        <img src={tick} alt="tick" />
        <h1>William</h1>
      </div>
      <p id="bio">Artist, Motion,graphics</p>
      <p>
        "Be the first to get one of the 100+ lanuch-NFTs in our newly lanuched
        Marketplace Betal Get Me Here"
      </p>
      <h4>2M Followers </h4>
      <div className="profile_post">
        <p>43+posts</p>
        <button id="message">Message</button>
      </div>
      <button id="follow">Follow</button>
    </div>
  );
};
export default Mediaprofile;
