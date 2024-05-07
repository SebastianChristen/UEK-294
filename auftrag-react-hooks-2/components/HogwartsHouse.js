import { useState } from "react";
import { useEffect } from "react";

export default function HogwartsHouse(props) {
  const [houses, setHouses] = useState([]);

  const URL = `https://hp-api.onrender.com/api/characters/house/${props.name}`;

  useEffect(() => {
    const loadHouse = async () => {
      const response = await fetch(URL);
      const houses = await response.json();
      console.log(response);
      setHouses(houses);
    };
    loadHouse();
    console.log("fetch houses");
  }, []);

  return (
    <div>
      {houses.map((house) => {
        return (
          <div key={house.id}>
            <div>
              <h2>{house.name}</h2>

              <p>{house.alternate_names}</p>

              <img style={{ width: "400px" }} src={house.image}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}
