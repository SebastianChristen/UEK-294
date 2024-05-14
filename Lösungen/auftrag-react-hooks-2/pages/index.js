import ColoredCounter from "../components/ColoredCounter"
import CountdownTimer from "../components/CountdownTimer"
import Jokes from "../components/Jokes"
import SearchList from "../components/SearchList"

export default function IndexPage() {
    return (
        <div>
            <h2>ColoredCounter</h2>
            <ColoredCounter/>
            
            <h2>CountdownTimer</h2>
            <CountdownTimer count={2}/>
            
            <h2>Jokes</h2>
            <Jokes/>

            <h2>SearchList</h2>
            <SearchList names={[
                "Tony",
                "Steve",
                "Steven",
                "Bruce",
                "Clark", 
                "Diana", 
                "Cassandra"
            ]}/>
        </div>
    )
}
