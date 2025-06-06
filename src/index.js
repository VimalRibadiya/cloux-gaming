import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import About_alt from "./Pages/About_alt";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Pages/Contact";
import Contact2 from "./Pages/Contact2";
import Categories_games from "./Pages/Category_games";
import Categories_games2 from "./Pages/Category_games2";
import Categories_games3 from "./Pages/Category_games3";
import Feat_games from "./Pages/Feat_games";
import Shop from "./Pages/Shop";
import Product1 from "./Pages/Product1";
import Feat_games2 from "./Pages/Feat_games2";
import Feat_games3 from "./Pages/Feat_games3";
import Feat_games4 from "./Pages/Feat_games4";
import Feat_games5 from "./Pages/Feat_games5";
import Feat_games6 from "./Pages/Feat_games6";
import Feat_games7 from "./Pages/Feat_games7";
import Feat_games8 from "./Pages/Feat_games8";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about_alt" element={<About_alt />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact2" element={<Contact2 />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product1 />} />
        <Route path="/feat_games" element={<Feat_games />} />
        <Route path="/feat_games2" element={<Feat_games2 />} />
        <Route path="/feat_games3" element={<Feat_games3 />} />
        <Route path="/feat_games4" element={<Feat_games4 />} />
        <Route path="/feat_games5" element={<Feat_games5 />} />
        <Route path="/feat_games6" element={<Feat_games6 />} />
        <Route path="/feat_games7" element={<Feat_games7 />} />
        <Route path="/feat_games8" element={<Feat_games8 />} />
        <Route path="/category_games" element={<Categories_games />} />
        <Route path="/category_games2" element={<Categories_games2 />} />
        <Route path="/category_games3" element={<Categories_games3 />} />
      </Routes>
      <Footer />
    </HashRouter>
  </>
);
