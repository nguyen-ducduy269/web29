"use client";
import React from "react";
import Link from "next/link";

///// impotr components
import { CollectionsStyle } from "@/app/_style-components/collections/CollectionsStyle";
import { Container } from "@/app/_style-components/home-page-css/Container";

///// import icons
import { SlArrowRight } from "react-icons/sl";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgDisplayGrid } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Collections = () => {
  return (
    <CollectionsStyle>
      <Container>
        <div className="shoptify-collection">
          <div className="filter">
            <h4>Filters</h4>

            <div className="filter-option">
              <div className="title">Light</div>

              <form action="">
                <input type="checkbox" value={"low_light"} />
                <label htmlFor="">Low Light</label>
              </form>

              <form action="">
                <input type="checkbox" value={"bright_light"} />
                <label htmlFor="">Bright Light</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">Plant Size</div>

              <form action="">
                <input type="checkbox" value={"mini"} />
                <label htmlFor="">Mini (2"-3" Pot)</label>
              </form>

              <form action="">
                <input type="checkbox" value={"small"} />
                <label htmlFor="">Small (4" Pot)</label>
              </form>

              <form action="">
                <input type="checkbox" value={"medium"} />
                <label htmlFor="">Medium (6" Pot)</label>
              </form>

              <form action="">
                <input type="checkbox" value={"large"} />
                <label htmlFor="">Large (8"-10" Pot)</label>
              </form>

              <form action="">
                <input type="checkbox" value={"cutting"} />
                <label htmlFor="">Cuttings</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">Genus</div>

              <form action="">
                <input type="checkbox" value={"zantedeschia"} />
                <label htmlFor="">Zantedeschia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"alocasia"} />
                <label htmlFor="">Alocasia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"amaryllis"} />
                <label htmlFor="">Amaryllis</label>
              </form>

              <form action="">
                <input type="checkbox" value={"amydrium"} />
                <label htmlFor="">Amydrium</label>
              </form>

              <form action="">
                <input type="checkbox" value={"anthurium"} />
                <label htmlFor="">Anthurium</label>
              </form>

              <form action="">
                <input type="checkbox" value={"aralia"} />
                <label htmlFor="">Aralia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"aralia"} />
                <label htmlFor="">Aralia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"azalea"} />
                <label htmlFor="">Azalea</label>
              </form>

              <form action="">
                <input type="checkbox" value={"begonia"} />
                <label htmlFor="">Begonia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"bromeliad"} />
                <label htmlFor="">Bromeliad</label>
              </form>

              <form action="">
                <input type="checkbox" value={"cactus"} />
                <label htmlFor="">Cactus</label>
              </form>

              <form action="">
                <input type="checkbox" value={"calathea"} />
                <label htmlFor="">Calathea</label>
              </form>

              <form action="">
                <input type="checkbox" value={"carnivorous"} />
                <label htmlFor="">Carnivorous</label>
              </form>

              <form action="">
                <input type="checkbox" value={"castanospermum"} />
                <label htmlFor="">Castanospermum</label>
              </form>

              <form action="">
                <input type="checkbox" value={"chinese_evergreen"} />
                <label htmlFor="">Chinese Evergreen</label>
              </form>

              <form action="">
                <input type="checkbox" value={"clusia"} />
                <label htmlFor="">Clusia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"fern"} />
                <label htmlFor="">Fern</label>
              </form>

              <form action="">
                <input type="checkbox" value={"monstera"} />
                <label htmlFor="">Monstera</label>
              </form>

              <form action="">
                <input type="checkbox" value={"orchid"} />
                <label htmlFor="">Orchid</label>
              </form>

              <form action="">
                <input type="checkbox" value={"palm"} />
                <label htmlFor="">Palm</label>
              </form>

              <form action="">
                <input type="checkbox" value={"philodendron"} />
                <label htmlFor="">Philodendron</label>
              </form>

              <form action="">
                <input type="checkbox" value={"pothos"} />
                <label htmlFor="">Pothos</label>
              </form>

              <form action="">
                <input type="checkbox" value={"snake"} />
                <label htmlFor="">Snake</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succ_euphorbia"} />
                <label htmlFor="">Succ. Euphorbia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succulent_huernia"} />
                <label htmlFor="">Succulent_ Huernia</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succulent_all"} />
                <label htmlFor="">Succulent_All</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succulent_orbea"} />
                <label htmlFor="">Succulent_Orbea</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succulent_senecio"} />
                <label htmlFor="">Succulent_Senecio</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">Type</div>

              <form action="">
                <input type="checkbox" value={"flowering"} />
                <label htmlFor="">Flowering</label>
              </form>

              <form action="">
                <input type="checkbox" value={"potted"} />
                <label htmlFor="">Pre Potted</label>
              </form>

              <form action="">
                <input type="checkbox" value={"rare_plants"} />
                <label htmlFor="">Rare Plants</label>
              </form>

              <form action="">
                <input type="checkbox" value={"succulents"} />
                <label htmlFor="">Succulents and Cacti</label>
              </form>

              <form action="">
                <input type="checkbox" value={"tropical"} />
                <label htmlFor="">Tropical Indoor Plant</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">Benefits</div>

              <form action="">
                <input type="checkbox" value={"purifier"} />
                <label htmlFor="">Air Purifier</label>
              </form>

              <form action="">
                <input type="checkbox" value={"care"} />
                <label htmlFor="">Easy Care</label>
              </form>

              <form action="">
                <input type="checkbox" value={"pet"} />
                <label htmlFor="">Pet Friendly</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">New</div>

              <form action="">
                <input type="checkbox" value={"arrival"} />
                <label htmlFor="">Arrival</label>
              </form>
            </div>

            <div className="filter-option">
              <div className="title">Sale</div>

              <form action="">
                <input type="checkbox" value={"discounted"} />
                <label htmlFor="">Discounted Items</label>
              </form>
            </div>
          </div>

          <div className="collections">
            <div className="title">
              <Link href={"/"}>Home</Link> <SlArrowRight /> All PLants
            </div>

            <h1>All Plants</h1>

            <div className="filter-choice">
              <div className="light">
                Light - Low Light <AiFillCloseCircle />
              </div>

              <div className="plant-size">
                Plant Size - Mini (2"-3" Pot) <AiFillCloseCircle />
              </div>

              <div className="genus">
                Genus - Alocasia <AiFillCloseCircle />
              </div>

              <div className="type">
                Type - Flowering <AiFillCloseCircle />
              </div>

              <div className="benefits">
                Benefits - Air Purifier <AiFillCloseCircle />
              </div>

              <div className="new">
                New - Arrival <AiFillCloseCircle />
              </div>

              <div className="sale">
                Sale - Discounted Items <AiFillCloseCircle />
              </div>

              <button>Remove all filters</button>
            </div>

            <div className="sort">
              <div className="sort-by">
                <div className="title">Sort by</div>

                <select name="" id="">
                  <option value="">Featured</option>
                  <option value="">Best Selling</option>
                  <option value="">Alphabetically, A-Z</option>
                  <option value="">Alphabetically, Z-A</option>
                  <option value="">Price, low to high</option>
                  <option value="">Price, high to low</option>
                  <option value="">Date, old to new</option>
                  <option value="">Date, new to old</option>
                </select>
              </div>

              <div className="view">
                View as <CgDisplayGrid />
              </div>
            </div>

            <div className="all-product">
              <div className="product-item">
                <img
                  src="https://houseplantshop.com/cdn/shop/products/route-package-protection-logo_592x592.jpg?v=1687351602"
                  alt=""
                />

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="product-price">from $0.98</div>

                <div className="owner">Route Package Protection</div>

                <div className="option">
                  <button className="quick-shop">Quick shop</button>
                  <button className="choose-option">Choose Options</button>
                </div>
              </div>

              <div className="product-item">
                <img
                  src="https://houseplantshop.com/cdn/shop/products/route-package-protection-logo_592x592.jpg?v=1687351602"
                  alt=""
                />

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="product-price">from $0.98</div>

                <div className="owner">Route Package Protection</div>

                <div className="option">
                  <button className="quick-shop">Quick shop</button>
                  <button className="choose-option">Choose Options</button>
                </div>
              </div>

              <div className="product-item">
                <img
                  src="https://houseplantshop.com/cdn/shop/products/route-package-protection-logo_592x592.jpg?v=1687351602"
                  alt=""
                />

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="product-price">from $0.98</div>

                <div className="owner">Route Package Protection</div>

                <div className="option">
                  <button className="quick-shop">Quick shop</button>
                  <button className="choose-option">Choose Options</button>
                </div>
              </div>

              <div className="product-item">
                <img
                  src="https://houseplantshop.com/cdn/shop/products/route-package-protection-logo_592x592.jpg?v=1687351602"
                  alt=""
                />

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="product-price">from $0.98</div>

                <div className="owner">Route Package Protection</div>

                <div className="option">
                  <button className="quick-shop">Quick shop</button>
                  <button className="choose-option">Choose Options</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </CollectionsStyle>
  );
};

export default Collections;
