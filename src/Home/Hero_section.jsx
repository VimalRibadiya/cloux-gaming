import React from "react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Hero_section = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="hero-main">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-content">
                <ul className="game-details">
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <a href="#">PLAYSTATION 4 , STEAM</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-tags"></i>
                    <a href="#">ACTION , ADVANTURE</a>
                  </li>
                </ul>
                <div className="title">Egypt and World</div>
                <div className="detail">
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci tation ullamcorper
                  suscipit.
                </div>
                <div className="btns">
                  <a href="#">GAME DETAILS</a>
                  <a href="#">BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-main hero-main-2">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-content">
                <ul className="game-details">
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <a href="#">ORIGIN , PLAYSTATION 4</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-tags"></i>
                    <a href="#">SPORTS</a>
                  </li>
                </ul>
                <div className="title">gloria soccer 2018</div>
                <div className="detail">
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci tation ullamcorper
                  suscipit.
                </div>
                <div className="btns">
                  <a href="#">GAME DETAILS</a>
                  <a href="#">BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-main hero-main-3">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-content">
                <ul className="game-details">
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <a href="#">STEAM , UPLAY</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-tags"></i>
                    <a href="#">RACING , SPORTS</a>
                  </li>
                </ul>
                <div className="title">return of the cars</div>
                <div className="detail">
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci tation ullamcorper
                  suscipit.
                </div>
                <div className="btns">
                  <a href="#">GAME DETAILS</a>
                  <a href="#">BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    // <>
    //   <div className="hero-main">
    //     <div className="container">
    //       <div className="hero-inner">
    //         <div className="hero-content">
    //           <ul className="game-details">
    //             <li>
    //               <i class="fa-solid fa-tv"></i>
    //               <a href="#">PLAYSTATION 4 , STEAM</a>
    //             </li>
    //             <li>
    //               <i class="fa-solid fa-tags"></i>
    //               <a href="#">ACTION , ADVANTURE</a>
    //             </li>
    //           </ul>
    //           <div className="title">Egypt and World</div>
    //           <div className="detail">
    //             Consectetuer adipiscing elit, sed diam nonummy nibh euismod
    //             tincidunt laoreet dolore magna <br /> aliquam erat volutpat. Ut wisi
    //             enim ad minim veniam, quis nostrud exerci tation ullamcorper
    //             suscipit.
    //           </div>
    //           <div className="btns">
    //             <a href="#">GAME DETAILS</a>
    //             <a href="#">BUY NOW</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Hero_section;
