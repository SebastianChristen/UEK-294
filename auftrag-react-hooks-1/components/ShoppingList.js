import { useState } from "react";

let globalId = 0;

export default function ShoppingList(props) {
  const [ShoppingItem, setShoppingItem] = useState("");
  const [shoppingListArray, setShoppingListArray] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const id = globalId++;
    const newShoppingItem = {
      id,
      name: inputValue,
    };

    setShoppingItem(newShoppingItem);
  };

  const submit = (e) => {
    // basically push the "ShoppingItem" to the existing array
    if (ShoppingItem) {
      // only if the string gotten from user isnt empty
      const updatedList = [...shoppingListArray, ShoppingItem];
      setShoppingListArray(updatedList);
    }
  };

  return (
    <div>
      <p>
        {
          //Check if the array is empty or not
          shoppingListArray == "" ? "NO ITEMS LUL" : ""
        }
      </p>

      <p>{ShoppingItem == "" ? "YOU HAVE TO ENTA A NAME" : ""}</p>

      <ul>
        {shoppingListArray.map((item) => {
          return (
            <div>
              <li key={item.id}>{item.name}</li>
            </div>
          );
        })}
      </ul>

      <input
        type="text"
        onChange={handleChange}
        value={ShoppingItem.name}
      ></input>

      <button type="submit" name="submitButton" onClick={submit}>
        Submit
      </button>
    </div>
  );
}
