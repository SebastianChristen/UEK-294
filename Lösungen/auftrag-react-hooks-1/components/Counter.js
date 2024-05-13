import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(oldCount => oldCount + 1)
    }
    const decrement = () => setCount(oldCount => oldCount - 1)

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <span>Count: {count}</span>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
