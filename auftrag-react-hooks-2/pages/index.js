import Counter from "../components/ColoredCounter";
import HogwartsHouse from "../components/HogwartsHouse";
import GetRandomJoke from "../components/Jokes";
import SearchList from "../components/SearchList";

export default function IndexPage() {
  return (
    <div>
      <SearchList names = {["Neo","Sebu","Nico","Noël","Roman"]}></SearchList>

      <GetRandomJoke></GetRandomJoke>

      <Counter></Counter>

      <HogwartsHouse name="Gryffindor" />
    </div>
  );
}
