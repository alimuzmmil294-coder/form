import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";

const Services = () => {
  const { cart } = useContext(ProductContext);
  return (
    <div>
      <h1>Services</h1>
      
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((item) => (
            <div key={item.id} className="border flex flex-col p-4 rounded-md">
              <h2 className="text-2xl">{item.name}</h2>
              <p className="text-[20px]">Category: {item.category}</p>
              <p className="text-[20px]">Price: ${item.price.toFixed(2)}</p>
              <p className="text-[20px]">Stock: {item.stock}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
