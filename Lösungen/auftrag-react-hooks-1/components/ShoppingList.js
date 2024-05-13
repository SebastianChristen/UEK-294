import { useState } from "react"
import styles from "./ShoppingList.module.css"

export default function ShoppingList(props) {
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState("")
    const [error, setError] = useState("")

    const addItem = (e) => {
        setError("")
        if (newItem.trim().length === 0) {
            setError("New item's name can't be empty!")
        } else {
            setItems([...items, { id: Math.random().toString(), name: newItem }])
            setNewItem("")
        }
    }

    const removeItem = (item) => {
        setItems(items => items.filter(i => i.id !== item.id))
    }

    const clearList = () => setItems([])

    return (
        <div className={styles.shoppingList}>
            <h1>{props.title}</h1>

            {items.length === 0 ? <div>List is empty</div> : <div>List has {items.length} elements.</div>}

            <ul>
                {
                    items.map(item => <li key={item.id}>{item.name} <span onClick={() => removeItem(item)}>X</span></li>)
                }
            </ul>

            <div>
                <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                <button onClick={addItem}>Add item</button>
                <button onClick={clearList}>Clear list</button>
            </div>

            {error && <div className={styles.error}>{error}</div>}
        </div>
    )
}
