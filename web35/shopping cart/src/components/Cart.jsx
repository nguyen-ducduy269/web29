import React from "react";

const Cart = () => {
  return (
    <>
      <h2>Your Order</h2>

      <div className="order-table">
        <table>
          <tr>
            <th>Name Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Discount Precentage</th>
            <th>Final Price</th>
          </tr>
          <tr>
            <td>iPhone 9</td>
            <td>1</td>
            <td>$549</td>
            <td>12.96%</td>
            <td>$477.85</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Cart;
