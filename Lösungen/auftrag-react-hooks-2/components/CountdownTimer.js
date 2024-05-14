import { useState, useEffect } from "react"

export default function CountdownTimer(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(props.count)
    }, [props.count])

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setCount(oldValue => {
                const newCount = oldValue - 1
                if(newCount === 0) clearInterval(intervalId)
                return newCount
            })
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            Count: {count}
        </div>
    )
}
