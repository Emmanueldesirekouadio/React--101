import React from "react";
import  styles from "./Product.module.css";
import { useState } from "react";
import ItemDescription from "./ItemDescription";






function Product({ name, description, price}) {
  const [count, setCount] = useState(0);



  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };



  return (
    <div className={styles.product}>
      <ItemDescription name={name} description={description} />
      <h2> Price: ${price} </h2>
      <button onClick={increment}> + </button>
      <h2> Count: {count} </h2>
      <button onClick={decrement}> - </button>
    </div>
  );
}

export default Product;
