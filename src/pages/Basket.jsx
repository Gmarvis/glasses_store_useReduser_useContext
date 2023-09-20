import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context-and-reducer/StoreContext";
import BasketProducts from "../components/BasketProducts";

const Basket = () => {
  const { products, total } = useContext(StoreContext);
  return (
    <>
      <div>
        <Navbar />
        <h1>Your Basket</h1>
        <p>Total: ${total}</p>
      </div>
      {products.map((product, i) => (
        <BasketProducts key={i} item={product} />
      ))}
    </>
  );
};

export default Basket;
