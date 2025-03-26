import React from "react";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

const Product6 = () => {
  return (
    <>
      <div className="C2empty">
        <div className="Contact2">
          <h1>Xtra Sweatshirt</h1>
        </div>
      </div>
      <div className="empty2"></div>
      <div className="product-outer">
        <div className="product-container">
          <div className="product-inner">
            <div className="product-inner-in">
              <div className="product-inner-in-item">
                <div className="product-image">
                  <InnerImageZoom
                    src="/cloux-gaming/images/hoodie_6_front.jpg"
                    zoomSrc="/cloux-gaming/images/hoodie_6_front.jpg"
                    zoomType="hover"
                    alt="hoodie_6_front"
                  />
                  <span class="product-img-span">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                  &nbsp;
                </div>
              </div>
              <div
                className="product-inner-in-item"
                style={{ padding: "0 0 220px 0" }}
              >
                <h1 class="product-title">Xtra Sweatshirt</h1>
                <span class="product-span">£89.00</span>&nbsp;
                <span class="product-spann">£79.00</span>
                <p>
                  Purus non enim praesent elementum facilisis. Neque vitae
                  tempus quam pellentesque. Facilisis mauris sit amet massa
                  vitae tortor condimentum lacinia.{" "}
                  <strong>
                    Rhoncus dolor purus non enim praesent elementum facilisis
                    leo. Quisque non tellus orci ac auctor augue mauris.
                    Lobortis mattis aliquam faucibus purus.
                  </strong>{" "}
                  Cras pulvinar mattis nunc sed blandit libero volutpat amet.
                </p>
                <p>
                  Lorem sed risus ultricies tristique nulla aliquet enim tortor.{" "}
                  <span style={{ color: "#FFA725" }}>
                    <strong>
                      Ultricies lacus sed turpis tincidunt id. Purus ut faucibus
                      pulvinar elementum integer enim neque volutpat ac.
                    </strong>
                  </span>{" "}
                  Non pulvinar neque laoreet suspendisse vestibulum.
                </p>
                <br />
                <input
                  type="number"
                  className="product-number"
                  max={""}
                  min={"1"}
                  placeholder="1"
                />
                <button type="button" class="product-btn">
                  Add to cart
                </button>
                <div className="product-span3">
                  Category:&nbsp;
                  <a href="#">T-Shirt</a>
                </div>
                <div className="product-span3">
                  Tags:&nbsp;
                  <a href="#">Cloux</a>,&nbsp;
                  <a href="#">Equipment</a>,&nbsp;
                  <a href="#">Gamer</a>,&nbsp;
                  <a href="#">Headphone</a>
                </div>
              </div>
            </div>
            <div className="product-inner-in2">
              <div className="product-inner-in-item2">
                <a href="#" className="product2-a">
                  description
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#" className="product2-a2">
                  reviews (0)
                </a>
                <h2>Description</h2>
                <p className="product2-content">
                  {" "}
                  Purus non enim praesent elementum facilisis. Neque vitae
                  tempus quam pellentesque. Facilisis mauris sit amet massa
                  vitae tortor condimentum lacinia.{" "}
                  <strong>
                    Rhoncus dolor purus non enim praesent elementum facilisis
                    leo. Quisque non tellus orci ac auctor augue mauris.
                    Lobortis mattis aliquam faucibus purus.
                  </strong>{" "}
                  Cras pulvinar mattis nunc sed blandit libero volutpat. Amet
                  porttitor eget dolor morbi non arcu risus. Proin sagittis nisl
                  rhoncus mattis rhoncus urna neque viverra. Molestie at
                  elementum eu facilisis sed. In aliquam sem fringilla ut
                  morbi&nbsp;&nbsp;morbi non arcu risus. Proin sagittis nisl
                  rhoncus mattis rhoncus urna neque.
                </p>
                <br />
                <p className="product2-content">
                  Lorem sed risus ultricies tristique nulla aliquet enim tortor.{" "}
                  <span style={{ color: "#FFA725" }}>
                    <strong>
                      Ultricies lacus sed turpis tincidunt id. Purus ut faucibus
                      pulvinar elementum integer enim neque volutpat ac.
                    </strong>
                  </span>{" "}
                  Non pulvinar neque laoreet suspendisse. Vestibulum rhoncus est
                  pellentesque elit ullamcorper dignissim cras tincidunt
                  lobortis malesuada.&nbsp;
                  <del>
                    Ut placerat orci nulla pellentesque dignissim enim sit amet
                    venenatis lorem.
                  </del>
                </p>
                <br />
                <ul className="product2-content">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li>Faucibus turpis in eu mi bibendum neque.</li>
                  <li>Neque aliquam vestibulum morbi blandit cursus.</li>
                  <li>Enim nulla aliquet porttitor lacus.</li>
                </ul>
                <br />
                <p className="product2-content">
                  Purus non enim praesent elementum facilisis. Neque vitae
                  tempus quam pellentesque. Facilisis mauris sit amet massa
                  vitae tortor condimentum lacinia.{" "}
                  <strong>
                    Rhoncus dolor purus non enim praesent elementum facilisis
                    leo. Quisque non tellus orci ac auctor augue mauris.
                    Lobortis mattis aliquam faucibus purus.
                  </strong>{" "}
                  Cras pulvinar mattis nunc sed blandit libero volutpat. Amet
                  porttitor eget dolor morbi non arcu risus. Proin sagittis nisl
                  rhoncus mattis rhoncus urna neque viverra. Molestie at
                  elementum eu facilisis sed. In aliquam sem fringilla ut morbi.{" "}
                  <del>
                    Ut placerat orci nulla pellentesque dignissim enim sit amet
                    venenatis lorem.
                  </del>
                </p>
              </div>
            </div>
            <div className="product-inner-in3">
              <div className="product-inner-in-item3">
                <h2 className="pdd-h2">Related products</h2>

                <div className="product3-pd">
                  <div className="product3-pd-in">
                    <div className="product3-pd-in-item">
                      <div className="product3-pd-in-item-image">
                        <img
                          src="/cloux-gaming/images/egypt-product-2-300x300.jpg"
                          alt=""
                        />
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
                        <img
                          src="/cloux-gaming/images/cd_6_angle-300x300.jpg"
                          alt=""
                        />
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
                        <img
                          src="/cloux-gaming/images/product-3-300x300.jpg"
                          alt=""
                        />
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
                        <img
                          src="/cloux-gaming/images/hoodie_6_front-300x300.jpg"
                          alt=""
                        />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product6;
