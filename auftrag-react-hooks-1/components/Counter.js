import { useState } from "react";

export default function Counter() {
  const [zahl, setZahl] = useState(0);

  const handleClickPlus = (e) => {
    setZahl(zahl + 1);
  };

  const handleClickMinus = (e) => {
    setZahl(zahl - 1);
  };

  return (
    <div>
      <button onClick={handleClickPlus}>plus</button>
      <button onClick={handleClickMinus}>minus</button>
      <p>{zahl}</p>
    </div>
  );
}
