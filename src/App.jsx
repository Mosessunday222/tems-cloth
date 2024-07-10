
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "./page/product/Product";
import ProductDetail from "./page/product/ProductDetail"; 
import About from "./page/About/About";
import Home from "./page/Home/Home";
import PageNotFound from './page/PageNotFound'
import Checkout from "./page/Checkout/Checkout"; 
import NavPage from "./ui/NavPage";
import Footer from './ui/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavPage/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='product' element={<Product/>} />
        <Route path='product/:slug' element={<ProductDetail/>} />
        <Route path="about" element={<About/>} />
        <Route path="checkout" element={<Checkout/>} /> 
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
