import Shoppinglist from "../components/ShoppingList.js";

export default function ShoppingListPage() {
  return (
    <div>

        <h1>Breakfast shopping list</h1>
      <Shoppinglist
        items={[
          { name: "Milk", amount: 2 },
          { name: "Eggs", amount: 6 },
          { name: "Bread", amount: 1 },
        ]}
      />
    </div>
  );
}
