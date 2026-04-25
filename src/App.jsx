import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import { ProductContext } from "./Contexts/ProductContext";

const App = () => {
  const { darkMode, setDarkMode } = useContext(ProductContext);
  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
