import React, { useState } from "react";
import { useMyBag } from "../hooks/useMyBag";
import TotalPrice from "./TotalPrice";
import Item from "./Item";

const MainBag = () => {
  const data = useMyBag().data;
  // const [priceTotal, setPriceTotal] = useState(0);
  let priceTotal = 0;

  return (
    <>
      <div className="main-bag">
        <h1>My Bag</h1>

        <div className="my-products">
          {data.map((item) => {
            priceTotal += item.price;
            return (
              <>
                <Item item={item} />
              </>
            );
          })}
        </div>
      </div>

      <TotalPrice priceTotal={priceTotal} />
    </>
  );
};

export default MainBag;
