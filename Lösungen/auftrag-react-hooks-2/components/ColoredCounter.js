import { useState, useEffect } from "react"

export default function ColoredCounter() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("#FF0000")

    useEffect(() => {
        if(count % 2 === 0) {
            setColor("#FF0000")
        } else {
            setColor("#0000FF")
        }
    }, [count])

    return (
        <div style={{background: color}}>
            Count: {count}
            <button onClick={(e) => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}
