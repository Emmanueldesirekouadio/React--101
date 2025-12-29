import React from "react";
import styles from "./App.module.css";
import Product from "./Product";

function App() {
  return (
    <div className="app">
      <h1> My Counter App </h1>
      <h2 className={styles.error}> this is an error message </h2>

      <Product
        name="I phone 12"
        description="I phone 12 is a best phone in the world"
        price={1000}
      />
      <Product
        name="I phone 13"
        description="I phone 13 is a smart phone"
        price={2200}
      />
      <Product
        name="I phone 14"
        description="I phone 14 is a smart phone"
        price={4000}
      />
      <Product
        name="I phone 15"
        description="I phone 15 is a smart phone"
        price={6000}
      />
      <Product
        name="I phone 16"
        description="I phone 16 is a smart phone"
        price={9000}
      />
      <Product
        name="I phone 17"
        description="I phone 17 is a smart phone"
        price={30000}
      />
    </div>
  );
}

export default App;
