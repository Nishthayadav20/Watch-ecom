import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import ScrollToTop from "./components/common/ScrollToTop";

import Hero from "./components/home/Hero";
import Featured from "./components/home/Featured";
import Collections from "./components/home/Collections";
import WhyChoose from "./components/home/WhyChoose";

import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Collections />
      <WhyChoose />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;