import React from "react";
import Blog_news_props from "./Blog_news_props";

const Blog_news = () => {
  return (
    <>
      <div className="news-outer">
        <div className="container">
          <div className="news-inner">
            <div className="news-inner-in1">
              blog <span>& news</span>
            </div>
            <div className="news-inner-in2">
              {/* <div className="news-inner-in">
                                <div className="news-inner-in-image">
                                    <img src="" alt="" />
                                </div>
                                <div className="news-inner-in-content">
                                    <a href="#"></a>
                                    <p></p>
                                    <div className="in-item-content">
                                        <a href="#"></a>
                                        <h2></h2>
                                        <h3></h3>
                                    </div>
                                </div>
                            </div> */}
              <Blog_news_props
                image="/cloux-gaming/images/gallery-3-560x370.jpg"
                a="About Space and World"
                p="Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus"
                image2="/cloux-gaming/images/cropped-team-1-300x300.jpg"
                a1="Cloud Doe"
                h2="News"
                h3="January 2, 2018"
              />
              <Blog_news_props
                image="/cloux-gaming/images/video-post-560x370.jpg"
                a="New Trailer is Released!"
                p="Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus"
                image2="/cloux-gaming/images/cropped-team-1-300x300.jpg"
                a1="Cloud Doe"
                h2="videos"
                h3="January 2, 2018"
              />
              <Blog_news_props
                image="/cloux-gaming/images/post-1-560x370.jpg"
                a="Price List of the Games"
                p="Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus"
                image2="/cloux-gaming/images/cropped-team-1-300x300.jpg"
                a1="Cloud Doe"
                h2="news"
                h3="January 2, 2018"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog_news;
