import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // const exists = cart.find((item) => item.id === product.id);
    // if (!exists) {
    setCart(() => [...cart, product]);
    // } else {
    //   alert("Already Exists!");
    // }
  };
  return (
    <ProductContext.Provider
      value={{
        count,
        setCount,
        cart,
        setCart,
        addToCart,
        darkMode,
        setDarkMode,
      }}
    >
      {" "}
      {children}
    </ProductContext.Provider>
  );
};
