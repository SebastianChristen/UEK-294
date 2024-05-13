import ShoppingList from "../components/ShoppingList"

const items = [
    { name: "Milk", amount: 2 },
    { name: "Eggs", amount: 6 },
    { name: "Bread", amount: 1 }
]

export default function ShoppingListPage() {
    return (
        <div>
            <ShoppingList
                title="Breakfast Shopping List"
                items={items} />
        </div>
    )
}
