import React from "react";

const Blog_news_props = (news) => {
  return (
      <div className="news-inner-in-item">
        <div className="news-inner-in-image">
          <img src={news.image} alt="" />
        </div>
        <div className="news-inner-in-content">
          <a href="#" className="content-a">
            {news.a}
          </a>
          <p>{news.p}</p>
          <div className="in-item-content">
            <img src={news.image2} alt="" />
            <a href="#">{news.a1}</a>
            <h2>
              <i class="fas fa-folder-open" aria-hidden="true"></i>
              {news.h2}
            </h2>
            <h3>
              <i class="far fa-clock" aria-hidden="true"></i>
              {news.h3}
            </h3>
          </div>
        </div>
      </div>
  );
};

export default Blog_news_props;
