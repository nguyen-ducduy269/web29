function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="header-favicon"></div>
            <div className="shopping">
              <div className="search">
                <input type="text" placeholder="Search..." />
                <button className="find">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <a href="">
                <div className="cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <div className="number">0</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* 
      <div className="contain">
        <div className="container">
          <div className="banner">
            <div className="categories">
              <b className="title">
                <i className="fa-solid fa-bars"></i>
                <p>Categories</p>
              </b>

              <div className="list-categories"></div>
            </div>

            <div className="advertisement">
              <div className="more">
                <a href="/">
                  <b>Plus</b>
                </a>
                <a href="/">
                  <b>Cool Home Gadgets</b>
                </a>
                <a href="/">
                  <b>Super Deals</b>
                </a>
                <a href="/">
                  <b>New User Zone</b>
                </a>
              </div>
              <div className="adver">
                <div className="owl-carousel owl-theme big-one">
                  <a href="/">
                    <img
                      src="./public/assets/image/new-kingkong-9.webp"
                      alt=""
                    />
                  </a>
                  <a href="/">
                    <img src="./public/assets/image/automobile.webp" alt="" />
                  </a>
                  <a href="/">
                    <img
                      src="./public/assets/image/computer-office.webp"
                      alt=""
                    />
                  </a>
                  <a href="/">
                    <img
                      src="./public/assets/image/consumer-electronics.webp"
                      alt=""
                    />
                  </a>
                  <a href="/">
                    <img
                      src="./public/assets/image/home-appliances.webp"
                      alt=""
                    />
                  </a>
                  <a href="/">
                    <img
                      src="./public/assets/image/mother-&-kids.webp"
                      alt=""
                    />
                  </a>
                  <a href="/">
                    <img src="./public/assets/image/motorcycles.webp" alt="" />
                  </a>
                  <a href="/">
                    <img
                      src="./public/assets/image/phone-accessories.webp"
                      alt=""
                    />
                  </a>
                  <a href="/">
                    <img
                      src="./public/assets/image/security-protection.webp"
                      alt=""
                    />
                  </a>
                  <a href="/">
                    <img src="./public/assets/image/toys-hobbies.webp" alt="" />
                  </a>
                </div>
                <div className="ranking-main">
                  <div className="head">
                    <div className="title">Your fave shopping guide</div>
                    <div className="description">
                      Check out the latest new deals
                    </div>
                  </div>

                  <div className="owl-carousel owl-theme slick-track">
                    <div className="item">
                      <a href="">
                        <div className="item-img">
                          <img src="./public/assets/image/socks.webp" alt="" />
                        </div>
                        <div className="discount-deal">₫46,956</div>
                        <div className="deal-price">₫92,268</div>
                      </a>
                    </div>

                    <div className="item">
                      <a href="">
                        <div className="item-img">
                          <img
                            src="./public/assets/image/glassess.webp"
                            alt=""
                          />
                        </div>
                        <div className="discount-deal">₫57,521</div>
                        <div className="deal-price">₫115,277</div>
                      </a>
                    </div>

                    <div className="item">
                      <a href="">
                        <div className="item-img">
                          <img src="./public/assets/image/item.webp" alt="" />
                        </div>
                        <div className="discount-deal">₫70,199</div>
                        <div className="deal-price">₫140,633</div>
                      </a>
                    </div>

                    <div className="item">
                      <a href="">
                        <div className="item-img">
                          <img src="./public/assets/image/spider.webp" alt="" />
                        </div>
                        <div className="discount-deal">₫75,834</div>
                        <div className="deal-price">₫108,233</div>
                      </a>
                    </div>

                    <div className="item">
                      <a href="">
                        <div className="item-img">
                          <img src="./public/assets/image/camera.webp" alt="" />
                        </div>
                        <div className="discount-deal">₫57,756</div>
                        <div className="deal-price">₫111,285</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="account-main">
              <div className="main">
                <div className="account">
                  <img src="./public/assets/image/account.webp" alt="" />
                </div>
                <div className="text">Welcome to AliExpress</div>

                <div className="button">
                  <button className="register">Register</button>
                  <button className="sign-in">Sign in</button>
                </div>
              </div>

              <div className="new-deal">
                <h4>Your fave shopping guide</h4>
                <h3>Check out the latest new deals</h3>

                <div className="owl-carousel owl-theme new-deals">
                  <div className="product">
                    <img src="./public/assets/image/helicopter.webp" alt="" />
                    <div className="price">₫ 118,798</div>
                  </div>

                  <div className="product">
                    <img src="./public/assets/image/light.webp" alt="" />
                    <div className="price">₫ 65,973</div>
                  </div>

                  <div className="product">
                    <img src="./public/assets/image/loa.webp" alt="" />
                    <div className="price">₫ 113,633</div>
                  </div>

                  <div className="product">
                    <img src="./public/assets/image/airpots.webp" alt="" />
                    <div className="price">₫ 121,851</div>
                  </div>

                  <div className="product">
                    <img
                      src="./public/assets/image/garden-washer.webp"
                      alt=""
                    />
                    <div className="price">₫ 61,043</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="summer-sale">
            <div className="sale-space">
              <a href="">
                <img src="./public/assets/image/summer-sale.gif" alt="" />
              </a>
            </div>

            <div className="global-sale"></div>
          </div>

          <div className="super-deal">
            <div className="top-heading">
              <div className="first">
                <b>
                  <i style="color: black">Supper</i>
                </b>
                <b>
                  <i style="color: red">Deals</i>
                </b>
              </div>

              <div className="more-info">Top products. Incredible prices.</div>
            </div>

            <div className="deals">
              <div className="products">
                <a href="">
                  <div className="product-img">
                    <img
                      src="./public/assets/image/Microphone Wireless Headphones.webp"
                      alt=""
                    />
                  </div>

                  <div className="discount-precent">
                    <b>-67%</b>
                  </div>
                  <div className="product-price">
                    <div className="after-discount">
                      <b>₫54,954</b>
                    </div>
                    <div className="before-discount">₫169,089</div>
                  </div>
                </a>
              </div>

              <div className="products">
                <a href="">
                  <div className="product-img">
                    <img
                      src="./public/assets/image/LCD Handwriting Board Children Electronic Hand Painted.webp"
                      alt=""
                    />
                  </div>

                  <div className="discount-precent">
                    <b>-67%</b>
                  </div>
                  <div className="product-price">
                    <div className="after-discount">
                      <b>₫74,681</b>
                    </div>
                    <div className="before-discount">₫227,801</div>
                  </div>
                </a>
              </div>

              <div className="products">
                <a href="">
                  <div className="product-img">
                    <img src="./public/assets/image/2M LED.webp" alt="" />
                  </div>

                  <div className="discount-precent">
                    <b>-71%</b>
                  </div>
                  <div className="product-price">
                    <div className="after-discount">
                      <b>₫32,280</b>
                    </div>
                    <div className="before-discount">₫135,741</div>
                  </div>
                </a>
              </div>

              <div className="products">
                <a href="">
                  <div className="product-img">
                    <img
                      src="./public/assets/image/bluetooth-speaker.webp"
                      alt=""
                    />
                  </div>

                  <div className="discount-precent">
                    <b>-66%</b>
                  </div>
                  <div className="product-price">
                    <div className="after-discount">
                      <b>₫102,158</b>
                    </div>
                    <div className="before-discount">₫308,588</div>
                  </div>
                </a>
              </div>

              <div className="products">
                <a href="">
                  <div className="product-img">
                    <img src="./public/assets/image/flashlight.webp" alt="" />
                  </div>

                  <div className="discount-precent">
                    <b>-67%</b>
                  </div>
                  <div className="product-price">
                    <div className="after-discount">
                      <b>₫80,552</b>
                    </div>
                    <div className="before-discount">₫247,528</div>
                  </div>
                </a>
              </div>

              <div className="products">
                <a href="">
                  <div className="product-img">
                    <img
                      src="./public/assets/image/atmosphere-lightning.webp"
                      alt=""
                    />
                  </div>

                  <div className="discount-precent">
                    <b>-67%</b>
                  </div>
                  <div className="product-price">
                    <div className="after-discount">
                      <b>₫83,370</b>
                    </div>
                    <div className="before-discount">₫255,982</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="more-to-love">
            <h3>More To Love</h3>

            <div className="content"></div>
          </div>
        </div>
      </div>

      <div className="scoll-to-top">
        <a href="#top">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>

      <footer>
        <div className="container">
          <div className="site-server">
            <div className="site">
              <img src="./public/assets/image/dollar.png" alt="" />
              <h4>Great value</h4>
              <p>We offer competitive prices on over 100 million items.</p>
            </div>

            <div className="site">
              <img src="./public/assets/image/truck.png" alt="" />
              <h4>Worldwide shopping</h4>
              <p>
                We ship to over 200 countries and regions, and our site comes in
                12 languages.
              </p>
            </div>

            <div className="site">
              <img src="./public/assets/image/wallet.png" alt="" />
              <h4>Safe payment</h4>
              <p>
                Pay with the world’s most popular and secure payment methods.
              </p>
            </div>

            <div className="site">
              <img src="./public/assets/image/verified.png" alt="" />
              <h4>Shop with confidence</h4>
              <p>
                Our Buyer Protection policy covers your entire purchase journey.
              </p>
            </div>

            <div className="site">
              <img src="./public/assets/image/people.png" alt="" />
              <h4>Help center</h4>
              <p>
                Round-the-clock assistance for a smooth shopping experience.
              </p>
            </div>

            <div className="site">
              <img src="./public/assets/image/dollar.png" alt="" />
              <h4>Shop better</h4>
              <p>
                <a href="https://sale.aliexpress.com/__pc/download_app_guide.htm">
                  Download the app
                </a>
                for mobile-only features such as image search and discount
                games.
              </p>
            </div>
          </div>

          <div className="user-helper">
            <div className="connected">
              <h3>Stay connected</h3>
              <div className="connected-img">
                <a href="">
                  <img src="./public/assets/image/facebook.png" alt="" />
                </a>
                <a href="">
                  <img src="./public/assets/image/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="./public/assets/image/instagram.png" alt="" />
                </a>
                <a href="">
                  <img src="./public/assets/image/messenger.png" alt="" />
                </a>
                <a href="">
                  <img src="./public/assets/image/whatsapp.png" alt="" />
                </a>
              </div>
            </div>

            <div className="contact">
              <div className="contact-us">
                <h3>Shopping with us</h3>
                <ul>
                  <li>
                    <a href="">Making payments</a>
                  </li>
                  <li>
                    <a href="">Delivery options</a>
                  </li>
                  <li>
                    <a href="">Buyer Protection</a>
                  </li>
                </ul>
              </div>

              <div className="contact-us">
                <h3>Customer service</h3>
                <ul>
                  <li>
                    <a href="">Help Center</a>
                  </li>
                  <li>
                    <a href="">
                      Transaction Services Agreement for non-EU/UK Consumers
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Terms and Conditions for EU/EEA/UK Consumers
                      (Transactions)
                    </a>
                  </li>
                  <li>
                    <a href="">Take our feedback survey</a>
                  </li>
                </ul>
              </div>

              <div className="contact-us">
                <h3>Collaborate with us</h3>
                <ul>
                  <li>
                    <a href="">Partnerships</a>
                  </li>
                  <li>
                    <a href="">Affiliate program</a>
                  </li>
                  <li>
                    <a href="">DS Center</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}

export default App;
