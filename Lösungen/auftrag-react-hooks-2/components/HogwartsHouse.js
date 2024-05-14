import { useState, useEffect } from "react"

export default function HogwartsHouse(props) {
    const [members, setMembers] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const loadHouse = async () => {
            try {
                const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${props.name}`)
                const data = await response.json()
                setMembers(data)
            } catch (e) {
                setError("An error occured")
            }
        }
        loadHouse()
    }, [props.name])

    return (
        <div>
            <h1>{props.name}</h1>
            {error && <h2 style={{ color: "red" }}>{error}</h2>}

            <ul>
                {
                    members.map(member => {
                        return (
                            <li key={member.name}>
                                <h2>{member.name}</h2>
                                {member.image && <img src={member.image} alt={member.name} />}
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}
