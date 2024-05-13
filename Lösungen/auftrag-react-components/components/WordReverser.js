export default function WordReverser({ word }) {
    return <div>{word.split("").reverse().join("")}</div>
}
