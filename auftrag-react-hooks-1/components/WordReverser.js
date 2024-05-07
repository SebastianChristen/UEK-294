import { useState } from "react";

export default function WordReverser({ word }) {
  const [reversedWord, revWord] = useState(word);

  const handleClick = (e) => {
    revWord(word.split('').reverse().join(''));
  };

  return (
    <div>
      <button onClick={handleClick}>reverse</button>
      <p>{reversedWord}</p>
    </div>
  );
}
