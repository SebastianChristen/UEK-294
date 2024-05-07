import { useState } from "react";
 
export default function ShoppingList() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
 
    const addItem = () => {
        if (!input) {
            setError("No Item selected");
            return;
        }
        setError("");
        const index = items.findIndex(item => item.name.toLowerCase() === input.toLowerCase());
        if (index !== -1) {
           
            const newItems = [...items];
            newItems[index].quantity += 1;
            setItems(newItems);
        } else {
           
            const newItem = {
                id: items.length + 1,
                name: input,
                quantity: 1
            };
            setItems([...items, newItem]);
        }
        setInput("");
    };
 
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    };
 
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };
 
    const clearList = () => {
        setItems([]);
    };
 
    return (
        <div>
            <h1>Shopping List</h1>
            {error && <p>{error}</p>}
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={addItem}>Item hinzufügen</button>
            <button onClick={clearList}>Liste leeren</button>
            {items.length > 0 ? (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name} (Menge: {item.quantity})
                            <button onClick={() => removeItem(item.id)}>Entfernen</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>List is empty</p>
            )}
        </div>
    );
}