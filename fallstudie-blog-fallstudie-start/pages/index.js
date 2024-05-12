import styles from "./index.module.css"
import AllPosts from "@/components/AllPosts"
import Link from "next/link"

export default function IndexPage() {
    return (
        <div className={styles.posts}>
            <h1>Welcome to my blog!</h1>
            <Link href="/posts/create">Create a new post</Link>
            <AllPosts/>
        </div>
    )
}