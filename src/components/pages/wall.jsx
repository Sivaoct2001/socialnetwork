import React from "react";
import "./wall.css";
import Viewprofile from "../socialwork/wrok";
import News from "../news/news";
import Profile from "../newsfeed/header";
import Follow from "../follow/follow";
const Wall = () => {
  return (
    <div className="wall_heropage">
      <div className="wall_mainpage">
        <Viewprofile />
        <News />
      </div>
      <div>
        <Profile />
        <Profile />
      </div>
      <Follow />
    </div>
  );
};
export default Wall;
