import React from "react";

const Footer = () => {
  const icons = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      color: "#ffc311",
      url: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      color: "#ffc311",
      url: "https://www.twitter.com",
    },
    {
      name: "Google Plus",
      icon: "fab fa-google-plus-g",
      color: "#ffc311",
      url: "https://plus.google.com",
    }, // Google Plus is deprecated, consider removing or replacing
    {
      name: "YouTube",
      icon: "fab fa-youtube",
      color: "#ffc311",
      url: "https://www.youtube.com",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      color: "#ffc311",
      url: "https://www.instagram.com",
    },
    {
      name: "Twitch",
      icon: "fab fa-twitch",
      color: "#ffc311",
      url: "https://www.twitch.tv",
    },
  ];
  return (
    <>
      <div className="footer-main">
        <div className="footer-top">
          <div className="container">
            <div className="newsletter-inner">
              <div className="newsletter-content">
                <div className="newsletter-form">
                  <h2 className="newsletter-title">NEWSLETTER:</h2>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="newsletter-input"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="newsletter-input"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="newsletter-input"
                  />
                  <input
                    type="submit"
                    placeholder="Submit"
                    className="newsletter-submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="Footer-container">
            <div className="Footer-inner">
              {icons.map((a) => (
                <div className="footer-inner-item" key={a.name}>
                  <i className={a.icon} style={{ color: a.color }}></i>
                  <a href={a.url} target="_blank" rel="noopener noreferrer">
                    {a.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-col">
                <h2>
                  ABOUT <span>US</span>
                </h2>
                <p>
                  Amet nisl purus in mollis nunc sed id. Commodo nulla facilisi
                  nullam vehicula ipsum a arcu cursus. Volutpat a tincidunt
                  vitae semper pellentesque diam volutpat.
                </p>
                <ul className="about-ul">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Games</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">eSport</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h2>
                  LATEST <span>NEWS</span>
                </h2>
                <div className="post-item">
                  <div className="post-img">
                    <img
                      src="/cloux-gaming/images/gallery-3-90x65.jpg"
                      alt="gallery-3-90x65.jpg"
                    />
                  </div>
                  <div className="post-info">
                    <a href="#">About Space and World</a>
                    <p>
                      <i class="fa-regular fa-clock"></i> January 2, 2018
                    </p>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-img">
                    <img
                      src="/cloux-gaming/images/video-post-90x65.jpg"
                      alt="video-post-90x65.jpg"
                    />
                  </div>
                  <div className="post-info">
                    <a href="#">New Trailer is Released!</a>
                    <p>
                      <i class="fa-regular fa-clock"></i> January 2, 2018
                    </p>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-img">
                    <img
                      src="/cloux-gaming/images/post-1-90x65.jpg"
                      alt="post-1-90x65.jpg"
                    />
                  </div>
                  <div className="post-info">
                    <a href="#">Price List of the Games</a>
                    <p>
                      <i class="fa-regular fa-clock"></i> January 2, 2018
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-col">
                <h2>
                  APPS<span>&PLATFORMS</span>
                </h2>
                <ul className="apps-ul">
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-apple"></i>
                      <p>
                        Buy now via <strong>Apple Store</strong>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-google-play"></i>
                      <p>
                        Buy now via <strong>Google Play</strong>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-steam-symbol"></i>
                      <p>
                        Buy now via <strong>Steam</strong>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-windows"></i>
                      <p>
                        Download via <strong>Winstore</strong>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-amazon"></i>
                      <p>
                        Buy now via <strong>Amazon</strong>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-paypal"></i>
                      <p>
                        Download via <strong>Pay Pal</strong>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="footer-inner">
              <div className="copyright-content">
                <div className="logo">
                  <img src="/cloux-gaming/images/logo-2.png" alt="logo-2.png" />
                </div>
                <div className="text">
                  Copyright © 2018 Cloux - All rights reserved.
                </div>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Help center</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                  <li>
                    <a href="#">Terms and Conditons</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
