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
      </Routes>
      <Footer />
    </HashRouter>
  </>
);
