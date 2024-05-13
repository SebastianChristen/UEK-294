import { useState } from "react"

export default function WordReverser(props) {
    const [word, setWord] = useState(props.word)
    const [reversedWord, setReversedWord] = useState("")

    const handleClick = (e) => setReversedWord(word.split("").reverse().join(""))

    return (
        <div>
            <div>Word: {word}</div>

            { reversedWord && <div>Reversed word: {reversedWord}</div> }

            <button onClick={handleClick}>
                Reverse
            </button>
        </div>
    )
}
