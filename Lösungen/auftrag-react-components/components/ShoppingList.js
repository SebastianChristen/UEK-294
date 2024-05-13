import styles from "./ShoppingList.module.css"

export default function ShoppingList({ title, items }) {
    return (
        <div className={styles.shoppingList}>
            <h1>{title}</h1>
            <ul>
                {
                    items.map(item => {
                        return (
                            <li key={item.name}>
                                {item.name} - {item.amount}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
