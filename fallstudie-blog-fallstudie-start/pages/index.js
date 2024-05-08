import styles from "./index.module.css"
import AllPosts from "@/components/AllPosts"

export default function IndexPage() {
    return (
        <div className={styles.posts}>
            <h1>Welcome to my blog!</h1>
            <AllPosts/>
        </div>
    )
}