export default function ShoppingList(props) {
  return (
    <ul>
      {props.items.map(item => {
        return (
          <li key={item.name}>{item.name},{item.amount}
          </li>
        );
      })}
    </ul>
  );
}
