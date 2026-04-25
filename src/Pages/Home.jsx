import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";

const Home = () => {
  const { count, setCount } = useContext(ProductContext);
  console.log(count);
  
  return (
    <div>
      <p>{count}</p>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
