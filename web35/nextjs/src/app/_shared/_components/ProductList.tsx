import Link from "next/link";
import React from "react";

interface Props {
  product: any;
}

const ProductList = (props: Props) => {
  return (
    <table>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Discount Percentage</th>
        <th>Brand</th>
      </tr>

      {props.product.map((item: any) => {
        return (
          <tr>
            <td style={{ textAlign: "center", paddingBottom: "30px" }}>
              {item.title}
            </td>
            <td style={{ paddingBottom: "30px" }}>{item.description}</td>
            <td style={{ textAlign: "center", paddingBottom: "30px" }}>
              {item.price}
            </td>
            <td style={{ textAlign: "center", paddingBottom: "30px" }}>
              {item.discountPercentage}
            </td>
            <td style={{ textAlign: "center", paddingBottom: "30px" }}>
              {item.brand}
            </td>
            <td style={{ textAlign: "center", paddingBottom: "30px" }}>
              <Link href={`/products/${item.id}`}>
                <button>Products Detail</button>
              </Link>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default ProductList;
