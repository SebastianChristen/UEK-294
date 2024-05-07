import Counter from "../components/Counter";
import WordReverser from "../components/WordReverser";
import ShoppingList from "../components/ShoppingList";

export default function IndexPage() {
  return (
    <div>
      <Counter></Counter>

      <WordReverser word="Sussy "></WordReverser>



    <hr></hr>
      <ShoppingList
        items={[
          { id: 1, name: "Eggs" },
          { id: 2, name: "Milk" },
          { id: 3, name: "Bread" },
        ]}
      ></ShoppingList>
    </div>
  );
}
