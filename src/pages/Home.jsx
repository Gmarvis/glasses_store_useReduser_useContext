import React from "react";
import Navbar from "../components/Navbar";
import { storeData } from "../Data";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h2> New In</h2>
      {storeData.map((item, i) => (
        <Product key={i} item={item} />
      ))}
    </div>
  );
};

export default Home;
