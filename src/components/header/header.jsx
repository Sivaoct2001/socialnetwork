import React from "react";
import { Link } from "react-router-dom";
import search from "../../assets/images/sreach_icon.jpeg";
import msg from "../../assets/images/message_icon.jpeg";
import post from "../../assets/images/post_icon.jpeg";
import ham from "../../assets/icons/ham_svg.svg";
import cancel from "../../assets/icons/cancel_svg.svg";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [sidebarOn, setSidebarOn] = useState(false);
  const hamburger = (
    <>
      {!sidebarOn ? (
        <img
          src={ham}
          alt="hamicon"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(true);
          }}
        />
      ) : (
        <img
          src={cancel}
          alt="cancelicon"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(false);
          }}
        />
      )}
    </>
  );
  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <Link to="/">Wall</Link>
        <Link to="/friendsgroup">Friends</Link>
        <Link to="/friendschat">Chats</Link>
      </div>
    </div>
  );
  return (
    <div className="main_header">
      <h1>Socialnetwork</h1>
      <div className="sreach_box">
        <input type="search" placeholder="search" required />
        <button>
          <img src={search} alt="space" />
        </button>
      </div>
      <div className="head_links">
        <Link to="/">Wall</Link>
        <Link to="/friendsgroup">Friends</Link>
        <Link to="/friendschat">
          <img src={msg} alt="msg" />
        </Link>
      </div>
      <button>
        <img src={post} alt="post" />
        createposts
      </button>
      {hamburger}
      {sidebarOn && sidebar}
      <div className="log">
        <button>Logout</button>
      </div>
    </div>
  );
};
export default Header;
