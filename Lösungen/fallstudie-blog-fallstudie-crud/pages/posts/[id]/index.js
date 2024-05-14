import { deletePost, getPostById } from "@/lib/api/posts"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./index.module.css"

export default function PostPage() {
    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState(null)

    useEffect(() => {
        if (!id) return
        const loadPost = async () => {
            try {
                const post = await getPostById(id)
                setPost(post)
            } catch (e) {
                console.log(e)
                if (e.status === 404) router.push("/404")
            }
        }
        loadPost()
    }, [id])

    const handleDeleteClick = async (e) => {
        e.preventDefault()
        if (confirm("Delete post?")) {
            try {
                await deletePost(post.id)
                alert("Post deleted!")
                router.push("/")
            }
            catch (e) {
                alert("Ein Fehler ist aufgetreten.")
            }
        }
    }

    return post && (
        <article>
            <div className={styles.admin}>
                <Link href={`/posts/${post.id}/edit`} className="button">
                    Edit
                </Link>

                <a href="" className="button" onClick={handleDeleteClick}>Delete</a>
            </div>

            <h1>{post.title}</h1>
            <p>{post.text}</p>
        </article>

    )
}