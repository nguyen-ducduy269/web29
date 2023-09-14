import { useState } from "react";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import MainBag from "./components/MainBag";
import { MyBagContext } from "./context/MyBagContext";

const products = [
  {
    id: 1,
    image: "https://www.course-api.com/images/cart/phone-1.png",
    title: "Samsung Galaxy S8",
    price: 399.99,
    quantity: 1,
  },
  {
    id: 2,
    image: "https://www.course-api.com/images/cart/phone-2.png",
    title: "Google Pixel",
    price: 499.99,
    quantity: 1,
  },
  {
    id: 3,
    image: "https://www.course-api.com/images/cart/phone-3.png",
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    quantity: 1,
  },
  {
    id: 4,
    image: "https://www.course-api.com/images/cart/phone-4.png",
    title: "Samsung Galaxy S7",
    price: 599.99,
    quantity: 1,
  },
];

function App() {
  const [data, setData] = useState(products);

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <MyBagContext.Provider
        value={{
          data,
          setData,
          deleteItem,
        }}
      >
        <HeaderNav />
        <MainBag />
      </MyBagContext.Provider>
    </>
  );
}

export default App;
