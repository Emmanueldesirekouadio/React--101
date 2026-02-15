import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./App3.module.css";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
        );
        setdata(res.data.meals);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const itemList = data.map(({ strMealThumb, strMeal, idMeal }) => {
    return (
      <section className={styles.card}>
        <img src={strMealThumb} alt={strMeal} />
        <div className={styles.content}>
          <p className={styles.mealName}>{strMeal} </p>
          <p className={styles.mealId}># {idMeal}</p>
        </div>
      </section>
    );
  });

  return (
    <div>
      <center>
        <h1> Welcome to my SeaFood restaurant </h1>
      </center>
      <div className={styles.container}> {itemList} </div>
    </div>
  );
}

export default App;
