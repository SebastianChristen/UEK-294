import Counter from "../components/ColoredCounter";
import HogwartsHouse from "../components/HogwartsHouse";

export default function IndexPage() {
  return (
    <div>
      <Counter></Counter>

      <HogwartsHouse name="Gryffindor" />
    </div>
  );
}
