import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return <div>
    <div className='full-page'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  </div>
}

export default App;
