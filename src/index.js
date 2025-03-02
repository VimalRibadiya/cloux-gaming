import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import Header from "./Header";
import Home_body from "./Home/Home_body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Home_body/>
    <Footer />
  </>
);
