import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function homesubmenu() {
    const homesub = document.getElementById("home-sub-menu");
    const arrowup = document.getElementById("arrow-up");
    const arrowdown = document.getElementById("arrow-down");
    homesub.style.display = "block";
    arrowup.style.display = "block";
    arrowdown.style.display = "none";
  }
  function homesubmenuhide() {
    const homesub = document.getElementById("home-sub-menu");
    const arrowup = document.getElementById("arrow-up");
    const arrowdown = document.getElementById("arrow-down");
    homesub.style.display = "none";
    arrowup.style.display = "none";
    arrowdown.style.display = "block";
  }
  function pagesubmenu() {
    const pagesub = document.getElementById("pages-sub-menu");
    const arrowup = document.getElementById("arrow-up2");
    const arrowdown = document.getElementById("arrow-down2");
    pagesub.style.display = "block";
    arrowup.style.display = "block";
    arrowdown.style.display = "none";
  }
  function pagesubmenuhide() {
    const pagesub = document.getElementById("pages-sub-menu");
    const arrowup = document.getElementById("arrow-up2");
    const arrowdown = document.getElementById("arrow-down2");
    pagesub.style.display = "none";
    arrowup.style.display = "none";
    arrowdown.style.display = "block";
  }
  function gamesubmenu() {
    const gamesub = document.getElementById("games-sub-menu");
    const arrowup = document.getElementById("arrow-up3");
    const arrowdown = document.getElementById("arrow-down3");
    gamesub.style.display = "block";
    arrowup.style.display = "block";
    arrowdown.style.display = "none";
  }
  function gamesubmenuhide() {
    const gamesub = document.getElementById("games-sub-menu");
    const arrowup = document.getElementById("arrow-up3");
    const arrowdown = document.getElementById("arrow-down3");
    gamesub.style.display = "none";
    arrowup.style.display = "none";
    arrowdown.style.display = "block";
  }
  function blogsubmenu() {
    const blogsub = document.getElementById("blog-sub-menu");
    const arrowup = document.getElementById("arrow-up4");
    const arrowdown = document.getElementById("arrow-down4");
    blogsub.style.display = "block";
    arrowup.style.display = "block";
    arrowdown.style.display = "none";
  }
  function blogsubmenuhide() {
    const blogsub = document.getElementById("blog-sub-menu");
    const arrowup = document.getElementById("arrow-up4");
    const arrowdown = document.getElementById("arrow-down4");
    blogsub.style.display = "none";
    arrowup.style.display = "none";
    arrowdown.style.display = "block";
  }
  return (
    <>
      <div className="header-outer">
        <div className="container">
          <div className="header-inner">
            <div className="header-inner-item">
              <div className="header-logo">
                <img src="/cloux-gaming/images/cloux-logo.png" alt="logo" />
              </div>
              <div className="header-content">
                <div className="header-elements">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/gloriathemes/">
                        <i class="fas fa-search open-btn"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/gloriathemes/">
                        <i class="fab fa-facebook-f i-btn"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/GloriaThemes">
                        <i class="fab fa-twitter i-btn"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://plus.google.com/111420305296774523403">
                        <i class="fab fa-google-plus-g i-btn"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCQ33nDAYSrv_IdPH71q33iQ">
                        <i class="fab fa-youtube i-btn"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/gloriathemes/">
                        <i class="fab fa-instagram i-btn"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitch.tv/">
                        <i class="fab fa-twitch i-btn"></i>
                      </a>
                    </li>
                  </ul>

                  <div className="element-btn">
                    <a className="element-btn1">login</a>
                    <a className="element-btn2">signup</a>
                  </div>
                </div>
                <div className="header-navbar">
                  <div className="navbar">
                    <ul>
                      <li>
                        <a href="#" className="icon">
                          home
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#" className="sub-menu-item">
                              home 1 - multiple
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              home 2 - multiple
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              home 3 - multiple
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              home 4 - multiple
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              home 5 - game
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              home 6 - game
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              home 7 - esport
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              home 8 - esport
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" className="icon">
                          pages
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/about" className="sub-menu-item">
                              about
                            </Link>
                          </li>
                          <li>
                            <Link to="/about_alt" className="sub-menu-item">
                              about alternative
                            </Link>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              team
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              career
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              FAQ
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              galley
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              page example 1
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              page example 2
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              page example 3
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              shop
                            </a>
                          </li>
                          <li>
                            <Link to="/contact" className="sub-menu-item">
                              contact
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact2" className="sub-menu-item">
                              contact 2
                            </Link>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              achievements
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              advertise
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" className="icon">
                          games
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#" className="sub-menu-item">
                              Game Listing Style 1
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              Game Listing Style 2
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              Game Listing Style 3
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              game detail 1 - sales
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              game detail 2 - <br /> publicity
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              game detail 3 - <br /> publicity
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              detail 4 - review
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item icon2">
                              categorized games
                            </a>
                            <ul className="sub-menu-in">
                              <li>
                                <a href="#">games by categories</a>
                              </li>
                              <li>
                                <a href="#">games by companies</a>
                              </li>
                              <li>
                                <a href="#">games by genres</a>
                              </li>
                              <li>
                                <a href="#">games by languages</a>
                              </li>
                              <li>
                                <a href="#">games by modes</a>
                              </li>
                              <li>
                                <a href="#">games by os</a>
                              </li>
                              <li>
                                <a href="#">games by plaforms</a>
                              </li>
                              <li>
                                <a href="#">games by tags</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">forums</a>
                      </li>
                      <li>
                        <a href="#">esport</a>
                      </li>
                      <li>
                        <a href="#" className="icon">
                          blog
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#" className="sub-menu-item">
                              blog 1
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              blog 2
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              blog 3
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              blog 4
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              blog 5
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              review style 1 - point
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              review style 2 - stars
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              review post style 1
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              review post style 2
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-menu-item">
                              review post style 3
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="menu-toggle" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar for small screens */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src="/cloux-gaming/images/cloux-logo.png" alt="logo" />
          </div>
          <div className="close-btn" onClick={toggleSidebar}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="#">
                Home
                <i
                  class="fa-solid fa-chevron-down"
                  onClick={homesubmenu}
                  id="arrow-down"
                ></i>
                <i
                  class="fa-solid fa-chevron-up"
                  id="arrow-up"
                  onClick={homesubmenuhide}
                ></i>
              </a>
              <ul id="home-sub-menu">
                <li>
                  <a href="#" className="sub-menu-item">
                    home 1 - multiple
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    home 2 - multiple
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    home 3 - multiple
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    home 4 - multiple
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    home 5 - game
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    home 6 - game
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    home 7 - esport
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    home 8 - esport
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                Pages
                <i
                  class="fa-solid fa-chevron-down"
                  onClick={pagesubmenu}
                  id="arrow-down2"
                ></i>
                <i
                  class="fa-solid fa-chevron-up"
                  id="arrow-up2"
                  onClick={pagesubmenuhide}
                ></i>
              </a>

              <ul id="pages-sub-menu">
                <li>
                  <a href="#" className="sub-menu-item">
                    about
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    about alternative
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    team
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    career
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    galley
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    page example 1
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    page example 2
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    page example 3
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    shop
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    conctact
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    contact 2
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    achievements
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    advertise
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                Games
                <i
                  class="fa-solid fa-chevron-down"
                  onClick={gamesubmenu}
                  id="arrow-down3"
                ></i>
                <i
                  class="fa-solid fa-chevron-up"
                  id="arrow-up3"
                  onClick={gamesubmenuhide}
                ></i>
              </a>
              <ul id="games-sub-menu">
                <li>
                  <a href="#" className="sub-menu-item">
                    Game Listing Style 1
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    Game Listing Style 2
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    Game Listing Style 3
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    game detail 1 - sales
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    game detail 2 - <br /> publicity
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    game detail 3 - <br /> publicity
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    detail 4 - review
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item icon2">
                    categorized games
                  </a>
                  <ul className="sub-menu-in">
                    <li>
                      <a href="#">games by categories</a>
                    </li>
                    <li>
                      <a href="#">games by companies</a>
                    </li>
                    <li>
                      <a href="#">games by genres</a>
                    </li>
                    <li>
                      <a href="#">games by languages</a>
                    </li>
                    <li>
                      <a href="#">games by modes</a>
                    </li>
                    <li>
                      <a href="#">games by os</a>
                    </li>
                    <li>
                      <a href="#">games by plaforms</a>
                    </li>
                    <li>
                      <a href="#">games by tags</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Forums</a>
            </li>
            <li>
              <a href="#">Esport</a>
            </li>
            <li>
              <a href="#">
                Blog
                <i
                  class="fa-solid fa-chevron-down"
                  onClick={blogsubmenu}
                  id="arrow-down4"
                ></i>
                <i
                  class="fa-solid fa-chevron-up"
                  id="arrow-up4"
                  onClick={blogsubmenuhide}
                ></i>
              </a>
              <ul id="blog-sub-menu">
                <li>
                  <a href="#" className="sub-menu-item">
                    blog 1
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    blog 2
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    blog 3
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    blog 4
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    blog 5
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    review style 1 - point
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    review style 2 - stars
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    review post style 1
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    review post style 2
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-item">
                    review post style 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
