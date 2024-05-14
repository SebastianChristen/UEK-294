import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./Navigation.module.css"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    useEffect(() => setIsOpen(false), [router.pathname])


    return (
        <nav className={styles.navigation}>
            <div onClick={e => setIsOpen(open => !open)}>{isOpen ? "✖" : "☰"}</div>

            <ul className={isOpen ? styles.open : ""}>
                <li key="create"><Link href="/posts/create">Create new post</Link></li>
            </ul>
        </nav>
    )
}