import { useState } from "react";
import { useEffect } from "react";

export default function Counter() {
  const [zahl, setZahl] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (zahl % 2) {
      setColor("red");
    } else {
      setColor("blue");
    }
    console.log("changed", color, zahl);
  }, [zahl]);

  const handleClick = (e) => {
    setZahl(zahl + 1);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={handleClick}>plus</button>
      <p>{zahl}</p>
    </div>
  );
}
