import React, { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";

const BasketProducts = ({ item }) => {
  const { removeFromBasket } = useContext(StoreContext);

  const handleRemove = () => {
    removeFromBasket(item);
  };

  return (
    <div>
      <img src={item.image} alt={item.name + "glasses"} />
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button onClick={handleRemove}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default BasketProducts;
