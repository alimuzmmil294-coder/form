import React, { useContext } from "react";
import { products } from "../Constants/products";
import { ProductContext } from "../Contexts/ProductContext";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [value, setValue] = React.useState("");
  const { addToCart } = useContext(ProductContext);
  return (
    <div>
      <div className=" flex items-center justify-center gap-2 p-2">
        <input
          className="w-[50%] border px-2 py-3 rounded-md"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          name=""
          id=""
        />
      </div>
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products
          .filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase()),
          )
          .map((prod) => (
            <div className="border flex flex-col p-4 rounded-md" key={prod.id}>
              <h2 className="text-2xl">{prod.name}</h2>
              <p className="text-[20px]">Category: {prod.category}</p>
              <p className="text-[20px]">Price: ${prod.price.toFixed(2)}</p>
              <p className="text-[20px]">Stock: {prod.stock}</p>
              <div className="flex text-center  gap-2 p-2 mt-4">
                <button
                  className="w-[48%]  bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                  onClick={() => addToCart(prod)}
                >
                  Add to Cart
                </button>
                <NavLink
                  className={
                    "my-1 text-center  w-[48%] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 "
                  }
                  to={`/product-detail/${prod.id}`}
                >
                  Product Details
                </NavLink>
              </div>
            </div>
          ))}
      </div>
      <h1 className="text-3xl font-bold mb-4">Products</h1>
    </div>
  );
};

export default Products;
