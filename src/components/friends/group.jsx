import React from "react";
import userimage from "../../assets/images/friend.jpg";
import tickimage from "../../assets/images/tick.webp";
import "./group.css";
const Friend = () => {
  const Friend = [
    {
      id: 1,
      icons: tickimage,
      Name: "Siva",
      Designation: "Artist",
      para: "Be the first get one of the 100+ lanched marketplace get me here",
      Followers: "Followers 2M",
      p: "43+ posts",
      msg: "Message",
      followed: false,
    },
    {
      id: 2,
      icons: tickimage,
      Name: "Balu",
      Designation: "Doctor",
      para: "Be the first get one of the 100+ lanched marketplace get me here",
      Followers: "Followers 2M",
      p: "43+posts",
      msg: "Message",
      followed: false,
    },
    {
      id: 3,
      icons: tickimage,
      Name: "Gopi",
      Designation: "web developer",
      para: "Be the first get one of the 100+ lanched marketplace get me here",
      Followers: "Followers 2M",
      p: "43+posts",
      msg: "Message",
      followed: false,
    },
    {
      id: 4,
      icons: tickimage,
      Name: "Vijay",
      Designation: "software delveloper",
      para: "Be the first get one of the 100+ lanched marketplace get me here",
      Followers: "Followers 2M",
      p: "43+posts",
      msg: "Message",
      followed: false,
    },
    {
      id: 5,
      icons: tickimage,
      Name: "Sankar",
      Designation: "Engineer",
      para: "Be the first get one of the 100+ lanched marketplace get me here",
      Followers: "Followers 2M",
      p: "43+posts",
      msg: "Message",
      followed: false,
    },
    {
      id: 6,
      icons: tickimage,
      Name: "Babu",
      Designation: "Technolog",
      para: "Be the first get one of the 100+ lanched marketplace get me here",
      Followers: "Followers 2M",
      p: "43+posts",
      msg: "Message",
      followed: false,
    },
  ];
  const [followActiveOpen, setfollowActiveOpen] = React.useState(Friend);
  const handleFollow = (userId) => {
    setfollowActiveOpen((preUsers) =>
      preUsers.map((user) =>
        user.id === userId ? { ...user, followed: !user.followed } : user
      )
    );
  };
  const renderFriend = followActiveOpen.map((user) => {
    return (
      <div className="friend_main">
        <div className="empty_img"></div>
        <div className="profile_info">
          <div className="name">
            <img src={user.icons} alt="tick" />
            <h1>{user.Name}</h1>
          </div>

          <div className="definition">
            <p id="Designation">{user.Designation}</p>
            <h4>{user.para}</h4>
            <h2>{user.Followers}</h2>
          </div>
          <div className="post">
            <p>{user.p}</p>
            <button>{user.msg}</button>
          </div>

          <div className="submit">
            <button onClick={() => handleFollow(user.id)}>
              {user.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="socialmedia_main">{renderFriend}</div>
    </React.Fragment>
  );
};
export default Friend;
