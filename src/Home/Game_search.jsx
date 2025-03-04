import React from "react";

const Game_search = () => {
  return (
    <>
      <div className="games-top">
        <div className="container">
          <div className="games-inner">
            <div className="games-content">
              <div className="games-form">
                <h2 className="games-title">Game Search</h2>
                <input
                  type="email"
                  placeholder="Keyword"
                  className="games-input1"
                />
                <li>
                  <input
                    type="text"
                    placeholder="Platform"
                    className="games-input"
                    readOnly
                  />
                  <ul className="games-input-sub">
                    <li>
                      <a href="#">Platform</a>
                    </li>
                    <li>
                      <a href="#">Mac OS X </a>
                    </li>
                    <li>
                      <a href="#">Microsoft Windows</a>
                    </li>
                    <li>
                      <a href="#">Origin</a>
                    </li>
                    <li>
                      <a href="#">Playstation 4</a>
                    </li>
                    <li>
                      <a href="#">Steam</a>
                    </li>
                    <li>
                      <a href="#">Uplay</a>
                    </li>
                    <li>
                      <a href="#">Xbox One</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Genre"
                    className="games-input"
                    readOnly
                  />
                  <ul className="games-input-sub">
                    <li>
                      <a href="#">genre</a>
                    </li>
                    <li>
                      <a href="#">action </a>
                    </li>
                    <li>
                      <a href="#">adventure</a>
                    </li>
                    <li>
                      <a href="#">casual</a>
                    </li>
                    <li>
                      <a href="#">fps 4</a>
                    </li>
                    <li>
                      <a href="#">massively multiple</a>
                    </li>
                    <li>
                      <a href="#">racing</a>
                    </li>
                    <li>
                      <a href="#">RPG</a>
                    </li>
                    <li>
                      <a href="#">simulations</a>
                    </li>
                    <li>
                      <a href="#">sports</a>
                    </li>
                    <li>
                      <a href="#">strategy</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Language"
                    className="games-input"
                    readOnly
                  />
                  <ul className="games-input-sub">
                    <li>
                      <a href="#">language</a>
                    </li>
                    <li>
                      <a href="#">english</a>
                    </li>
                    <li>
                      <a href="#">german</a>
                    </li>
                    <li>
                      <a href="#">italian</a>
                    </li>
                    <li>
                      <a href="#">portugese</a>
                    </li>
                    <li>
                      <a href="#">spansih</a>
                    </li>
                    <li>
                      <a href="#">turkish</a>
                    </li>
                  </ul>
                </li>
                <input
                  type="submit"
                  placeholder="search"
                  value="search"
                  className="games-submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game_search;
