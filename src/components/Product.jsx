import React, { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";

const Product = ({ item }) => {
  const { addToBasket } = useContext(StoreContext);

  const handleAdd = () => {
    addToBasket(item);
  };

 
  return (
    <div>
      <img src={item.image} alt="glasses" />
      <div>
        <div>
          <p>{item.price}</p>
          <p>{item.name}</p>
        </div>
        <button onClick={handleAdd}>Add to basket</button>
      </div>
    </div>
  );
};

export default Product;
