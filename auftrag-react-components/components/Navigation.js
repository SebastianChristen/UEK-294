import Link from "next/link"


export default function Navigation(props) {
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <li key={item.href}>
            <Link href={item.name}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
