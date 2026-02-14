import { useState } from "react";
import { useEffect } from "react";

function useRandomJoke() {
    const [joke, setJoke] = useState();
    useEffect(() => {
        const getData = async () => {
          const response = await fetch('https://official-joke-api.appspot.com/random_joke');
          const data = await response.json();
          setJoke(data.punchline);
        }
        getData();
      }, []);
      return joke;
}

export default useRandomJoke;