import Counter from "../components/Counter"
import ShoppingList from "../components/ShoppingList"
import WordReverser from "../components/WordReverser"

export default function IndexPage() {
    return (
        <div>
            <h2>Counter</h2>
            <Counter />

            <h2>WordReverser</h2>
            <WordReverser word="Kätzchen" />

            <h2>ShoppingList</h2>
            <ShoppingList
                title="Breakfast Shopping List"
            />
        </div>
    )
}
