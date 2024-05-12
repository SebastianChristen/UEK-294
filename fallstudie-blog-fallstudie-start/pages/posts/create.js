import styles from "./create.module.css"
import PostForm from "@/components/PostForm"

export default function PostsCreatePage() {
    return (
        <div className={styles.postcreate}>
            <h1>Create new post</h1>
            <PostForm></PostForm>
        </div>
    ) 
}