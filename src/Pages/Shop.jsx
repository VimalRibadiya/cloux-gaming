import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const products = [
    {
      id: 1,
      image: "/cloux-gaming/images/cd_5_angle-300x300.jpg",
      title: "Standard Edition",
      price: "£56.00",
    },
    {
      id: 2,
      image: "/cloux-gaming/images/product-3-300x300.jpg",
      title: "Standard Edition",
      price: "£56.00",
    },
    {
      id: 3,
      image: "/cloux-gaming/images/product-2-300x300.jpg",
      title: "Standard Edition",
      price: "£56.00",
    },
    {
      id: 4,
      image: "/cloux-gaming/images/product-1-300x300.jpg",
      title: "Standard Edition",
      price: "£56.00",
    },
    {
      id: 5,
      image: "/cloux-gaming/images/T_4_front-300x300.jpg",
      title: "Standard Edition",
      price: "£56.00",
    },
    {
      id: 6,
      image: "/cloux-gaming/images/hoodie_6_front-300x300.jpg",
      title: "Extra Edition",
      price: "£128.99",
    },
    {
      id: 7,
      image: "/cloux-gaming/images/cd_6_angle-300x300.jpg",
      title: "Office Coffee Pack",
      price: "£390.79",
    },
    {
      id: 8,
      image: "/cloux-gaming/images/egypt-product-1-300x300.jpg",
      title: "Pulse Headphone",
      price: "£355.00",
    },
  ];
  return (
    <>
      <div className="C2empty">
        <div className="Contact2">
          <h1>SHOP</h1>
        </div>
      </div>
      <div className="shop-main">
        <div className="container">
          <div className="product3-pd">
            <div className="shop-up">
              <p> Showing 1–8 of 9 results</p>
              <select name="orderby" class="orderby" aria-label="Shop order">
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date" selected="selected">
                  Sort by latest
                </option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
            <div className="product3-pd-in">
              {products.map((obj) => {
                return (
                  <div className="product3-pd-in-item">
                    <div className="product3-pd-in-item-image">
                      <Link to={`/product/${obj.id}`}>
                        <img src={obj.image} alt="" />
                      </Link>
                    </div>
                    <div className="product3-pd-in-item-content">
                      <h2 className="pd3-h2">{obj.title}</h2>
                      <span className="pd3-span">{obj.price}</span>
                      <br />
                      <a href="#">add to cart</a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="nav">
              <ul>
                <li>
                  <span>1</span>
                </li>
                <li>
                  <span>2</span>
                </li>
                <li>
                  <a href="#">→</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
