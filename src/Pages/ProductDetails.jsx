import React from "react";
import { products } from "../Constants/products";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  return (
    <div className="grid grid-cols-3 p-2">
      <div className="flex flex-col p-5 gap-5 rounded-md border ">
        <h2 className="text-2xl underline">{product.name}</h2>
        <h2 className="text-[20px] underline ">{product.category}</h2>
        <h2 className="text-[20px] underline ">{product.price}</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
