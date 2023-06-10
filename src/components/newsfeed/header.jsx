import React, { useState } from "react";
import backlogo from "../../assets/images/photo.jpeg";
import like from "../../assets/icons/favourite.png";
import myprofile from "../../assets/images/profile.jpeg";
import twitter from "../../assets/icons/retweet.png";
import "./header.css";
const Profile = () => {
  const [count, setcount] = useState(0);
  const handlechange = () => setcount(count + 1);
  const [heartactive, setHeartactive] = useState(false);
  return (
    <div className="hero_main">
      <div className="newshero_header">
        <div className="main">
          <img src={myprofile} alt="" />
          <div className="name">
            <p>
              <b>Reymond gale</b>
              <span>@reygale</span>
            </p>
            <p>Motion artist,MGX</p>
          </div>
        </div>
        <button>Viral</button>
      </div>
      <img src={backlogo} alt="" />
      <div className="content_main">
        <div className="content_one">
          <p>
            <b>NFT Photography peak time in george town</b>
          </p>
          <p>
            Be the first to get one of the 100+ lanuch-NFTs in our newly
            lanuched Marketplace Beta Get Me Here.....
          </p>
        </div>
        <div className="content_two">
          <p>2Mins</p>
          <p>
            <b>93</b>views
          </p>
        </div>
      </div>
      <div className="tail">
        <div className="content_three">
          {!heartactive ? (
            <button
              onClick={() => {
                handlechange();
                setHeartactive(true);
              }}
            >
              <img src={like} alt="" />
            </button>
          ) : (
            <button>
              <img src={like} alt="" />
            </button>
          )}
          <p>
            <b>{count}</b> like
          </p>
        </div>
        <div className="tick">
          <img src={twitter} alt="" />
          <p>
            <b>12</b>Tweets
          </p>
        </div>
        <button>Add Tweet</button>
      </div>
    </div>
  );
};
export default Profile;
