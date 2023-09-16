import "./styles.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { ShoppingProvider } from "./shopping-context/Shopping-Context";

function App() {
  return (
    <ShoppingProvider>
      <div className="App">
        <Navbar />
        <Header />
        <Section />
        <Footer />
      </div>
    </ShoppingProvider>
  );
}

export default App;
