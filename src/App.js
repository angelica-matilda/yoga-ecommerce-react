import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/index.css";
import { ShopContextProvider } from "./shop-context";

function App() {
  return (
    <div>
      <div className="full-page">
        <ShopContextProvider>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} index={true}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </div>
          <Footer />
        </ShopContextProvider>
      </div>
    </div>
  );
}

export default App;
