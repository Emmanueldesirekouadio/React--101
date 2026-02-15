import axios from "axios";
import { useEffect, useState } from "react";

function useSeafood() {
  const [seafood, setSeafood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchSeafood = async () => {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
          { signal: controller.signal },
        );

        setSeafood(data.meals ?? []);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSeafood();

    return () => {
      controller.abort();
    };
  }, []);

  return { seafood, loading, error };
}

export default useSeafood;
