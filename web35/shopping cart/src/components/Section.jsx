import React from "react";
import Card from "./Card";
import { useShopping } from "../hooks/useShopping";

const Section = () => {
  const { products } = useShopping();
  const loading = useShopping().loading;
  const error = useShopping().error;
  const myProducts = products.products;

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Lỗi khi tải dữ liệu</div>
          ) : (
            myProducts.map((product) => (
              <div className="col mb-5">
                <Card
                  img={product.thumbnail}
                  title={product.title}
                  price={product.price}
                  discountPercent={product.discountPercentage}
                  vote={product.rating}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
