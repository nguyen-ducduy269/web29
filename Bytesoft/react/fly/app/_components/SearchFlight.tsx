"use client";
import React, { useEffect } from "react";
import { Container } from "../_style-components/Container";
import { Button, DatePicker } from "antd";
import { Search } from "../_style-components/Search";
import Aos from "aos";

const SearchFlight = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Container>
        <Search>
          <div className="btns">
            <div className="singleBtn">Economy Class</div>
            <div className="singleBtn">Business Class</div>
            <div className="singleBtn">First Class</div>
          </div>

          <div className="search-input">
            <div className="search typing">
              <label htmlFor="">From</label>
              <input type="text" placeholder="From..." />
            </div>

            <div className="search typing">
              <label htmlFor="">To</label>
              <input type="text" placeholder="To..." />
            </div>

            <div className="search date-picking">
              <label htmlFor="">Depart date</label>
              <DatePicker />
            </div>

            <div className="search date-picking">
              <label htmlFor="">Return date</label>
              <DatePicker />
            </div>

            <div className="search typing">
              <label htmlFor="">Number Passengers</label>
              <input type="number" placeholder="1" min={1} />
            </div>

            <Button type="primary" className="search-btn">
              Search Flight
            </Button>
          </div>
        </Search>
      </Container>
    </>
  );
};

export default SearchFlight;
