// components/Navigation.js
import Link from "next/link"
import styles from "./Navigation.module.css"

export default function Navigation(props) {
    return (
        <nav className={styles.navigation}>
            <ul>
            {
                props.items.map(item => {
                    return (
                        <li key={item.name}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
}
