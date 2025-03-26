import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
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
              <div className="product3-pd-in-item">
                <div className="product3-pd-in-item-image">
                  <Link to="/product1"><img
                    src="/cloux-gaming/images/cd_5_angle-300x300.jpg"
                    alt=""
                  /></Link>
                </div>
                <div className="product3-pd-in-item-content">
                  <h2 className="pd3-h2">Standard Edition</h2>
                  <span className="pd3-span">£56.00</span>
                  <br />
                  <a href="#">add to cart</a>
                </div>
              </div>
              <div className="product3-pd-in-item">
                <div className="product3-pd-in-item-image">
                  <Link to="/product2"><img
                    src="/cloux-gaming/images/product-3-300x300.jpg"
                    alt=""
                  /></Link>
                </div>
                <div className="product3-pd-in-item-content">
                  <h2 className="pd3-h2">Standard Edition</h2>
                  <span className="pd3-span">£56.00</span>
                  <br />
                  <a href="#">add to cart</a>
                </div>
              </div>
              <div className="product3-pd-in-item">
                <div className="product3-pd-in-item-image">
                  <Link to="/product3"><img
                    src="/cloux-gaming/images/product-2-300x300.jpg"
                    alt=""
                  /></Link>
                </div>
                <div className="product3-pd-in-item-content">
                  <h2 className="pd3-h2">Standard Edition</h2>
                  <span className="pd3-span">£56.00</span>
                  <br />
                  <a href="#">add to cart</a>
                </div>
              </div>
              <div className="product3-pd-in-item">
                <div className="product3-pd-in-item-image">
                  <Link to="/product4"><img
                    src="/cloux-gaming/images/product-1-300x300.jpg"
                    alt=""
                  /></Link>
                </div>
                <div className="product3-pd-in-item-content">
                  <h2 className="pd3-h2">Standard Edition</h2>
                  <span className="pd3-span">£56.00</span>
                  <br />
                  <a href="#">add to cart</a>
                </div>
              </div>
              <div className="product3-pd-in-item">
                <div className="product3-pd-in-item-image">
                  <Link to="/product5"><img
                    src="/cloux-gaming/images/T_4_front-300x300.jpg"
                    alt=""
                  /></Link>
                </div>
                <div className="product3-pd-in-item-content">
                  <h2 className="pd3-h2">Standard Edition</h2>
                  <span className="pd3-span">£56.00</span>
                  <br />
                  <a href="#">add to cart</a>
                </div>
              </div>
              <div className="product3-pd-in-item">
                <div className="product3-pd-in-item-image">
                  <Link to="/product6"><img
                    src="/cloux-gaming/images/hoodie_6_front-300x300.jpg"
                    alt=""
                  /></Link>
                </div>
                <div className="product3-pd-in-item-content">
                  <h2 className="pd3-h2">Extra Edition</h2>
                  <span className="pd3-span">£128.99</span>
                  <br />
                  <a href="#">add to cart</a>
                </div>
              </div>
              <div className="product3-pd-in-item">
                <div className="product3-pd-in-item-image">
                  <Link to="/product7"><img
                    src="/cloux-gaming/images/cd_6_angle-300x300.jpg"
                    alt=""
                  /></Link>
                </div>
                <div className="product3-pd-in-item-content">
                  <h2 className="pd3-h2">Office Coffee Pack</h2>
                  <span className="pd3-span">£390.79</span>
                  <br />
                  <a href="#">add to cart</a>
                </div>
              </div>
              <div className="product3-pd-in-item">
                <div className="product3-pd-in-item-image">
                  <Link to="/product8"><img
                    src="/cloux-gaming/images/egypt-product-1-300x300.jpg"
                    alt=""
                  /></Link>
                </div>
                <div className="product3-pd-in-item-content">
                  <h2 className="pd3-h2">Pulse Headphone</h2>
                  <span className="pd3-span">£355.00</span>
                  <br />
                  <a href="#">add to cart</a>
                </div>
              </div>
              {/* <Product_props
                                            image2="/images/product-1.jpg"
                                            h2="Standard Edition"
                                            span2="£56.00"
                                            a2="add to cart"
                                        />
                                        <Product_props
                                            image2="/images/product-1.jpg"
                                            h2="Extra Edition"
                                            span2="£128.00"
                                            a2="add to cart"
                                        />
                                        <Product_props
                                            image2="/images/product-1.jpg"
                                            h2="Office Coffee Pack"
                                            span2="£390.79"
                                            a2="add to cart"
                                        />
                                        <Product_props
                                            image2="/images/product-1.jpg"
                                            h2="Pulse Headphone"
                                            span2="£355.00"
                                            a2="add to cart"
                                        /> */}
            </div>
            <div className="nav">
                <ul>
                    <li><span>1</span></li>
                    <li><span>2</span></li>
                    <li><a href="#">→</a></li>
             </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
