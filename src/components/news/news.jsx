import React from "react";
import "./news.css";
import photo from "../../assets/images/newsimage.jpg";
const News = () => {
  const Newslist = [
    {
      Icon: photo,
      Days: "The news mint. 1 week ago",
      Content: "DeFi booming with new initiative and launchers in the space",
      Views: "205 views",
      Link: "TRENDING",
    },
    {
      Icon: photo,
      Days: "The news mint. 1 week ago",
      Content: "DeFi booming with new initiative and launchers in the space",
      Views: "205 views",
      Link: "TRENDING",
    },
    {
      Icon: photo,
      Days: "The news mint. 1 week ago",
      Content: "DeFi booming with new initiative and launchers in the space",
      Views: "205 views",
      Link: "TRENDING",
    },
  ];
  const RenderNews = Newslist.map((Newstpye) => {
    return (
      <div className="news_hero">
        <div className="content_img">
          <img src={photo} alt="" />
        </div>
        <div className="content">
          <p>{Newstpye.Days}</p>
          <h3>{Newstpye.Content}</h3>
          <div className="content_link">
            <p>{Newstpye.Views}</p>
            <a href="">{Newstpye.Link}</a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="news_main">
        <div className="main_content">
          <div className="news_header">
            <div className="newslines"> </div>
            <h2>NEWS</h2>
          </div>
          <div className="news_para">
            <div className="news_content">
              <div className="news_img">
                <img src={photo} alt="" />
              </div>
              <div className="news_profile">
                <p>The news mint. 1 week ago</p>
                <h3>
                  DeFi booming with new initiative and launchers in the space
                </h3>
                <div className="news_link">
                  <p>205 Views</p>
                  <a href="">TRENDING</a>
                </div>
              </div>
            </div>
            <div className="para">
              <p>The news mint. 1 week ago</p>
              <h3>#NFTize the art industry</h3>
              <div className="views">
                <p>205 Views</p>
                <a href="">LATEST</a>
              </div>
            </div>
          </div>
        </div>
        <div className="news_render">{RenderNews}</div>
      </div>
    </React.Fragment>
  );
};
export default News;
