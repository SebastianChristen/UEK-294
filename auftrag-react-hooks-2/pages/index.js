import Counter from "../components/ColoredCounter";
import HogwartsHouse from "../components/HogwartsHouse";
import GetRandomJoke from "../components/Jokes";

export default function IndexPage() {
  return (
    <div>
      <GetRandomJoke></GetRandomJoke>

     <Counter></Counter>

      <HogwartsHouse name="Gryffindor" />
    </div>
  );
}
