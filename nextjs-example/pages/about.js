import Link from "next/link"
import styles from "./about.module.css"

export default function AboutPage() {
    return (
        <div className={styles.about}>
            <h1>About Page</h1>
            <Link href="/">Index</Link>
        </div>
    )
}
