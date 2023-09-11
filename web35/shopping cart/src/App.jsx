import "./styles.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignored = false;
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Lỗi tải dữ liệu");

        const items = await res.json();
        const products = items.products;

        if (!ignored) setProducts(products);
      } catch (error) {
        if (!ignored) setError(error);
      } finally {
        if (!ignored) setLoading(false);
      }
    };
    getProducts();

    return () => {
      ignored = true;
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section products={products} loading={loading} error={error} />
      <Footer />
    </div>
  );
}

export default App;
