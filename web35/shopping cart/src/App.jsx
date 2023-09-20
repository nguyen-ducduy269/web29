import "./styles.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { ShoppingProvider } from "./shopping-context/Shopping-Context";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import DetailProduct from "./components/DetailProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <ShoppingProvider>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </ShoppingProvider>
  );
}

export default App;
