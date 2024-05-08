import { useState } from "react";
import { useEffect } from "react";

export default function GetRandomJoke() {
  const [joke, setjoke] = useState([]);
  const [jokeVar, setjokeVar] = useState(0);

  const URL = `https://api.dadjokes.io/api/random/joke`;

  useEffect(() => {
    const loadjoke = async () => {
      const response = await fetch(URL);
      const joke = await response.json();
      console.log(response);
      setjoke(joke.body);
    };
    loadjoke();
  }, [jokeVar]);

  //Sobald sich diese var ändert, wird der useEffect aufgerufen. UseEffect == Observable
  const getJoke = (e) => {
    setjokeVar(jokeVar + 1);
  };

  return (
    <div>
      {joke.map((joke) => {
        return (
          <div key={joke._id}>
            <div>
              <h2>{joke.setup}</h2>
              <p>{joke.punchline}</p>
              <button onClick={getJoke}>get joke</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
