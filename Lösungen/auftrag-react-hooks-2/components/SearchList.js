import { useState, useEffect } from "react"

export default function SearchList(props) {
    const [query, setQuery] = useState("")
    const [filteredNames, setFilteredNames] = useState([])
    const [names, setNames] = useState([])

    useEffect(() => {
        setNames(props.names)
    }, [props.names])

    useEffect(() => {
        if(query) {
            setFilteredNames(names.filter(name => name.toLowerCase().includes(query.toLowerCase())))
        } else {
            setFilteredNames([])
        }
    }, [query])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="filter..." value={query} onChange={handleChange}/>
            <ul>
                {
                    (filteredNames.length > 0 ? filteredNames : names).map(name => <li key={name}>{name}</li>)
                }
            </ul>
        </div>
    )
}