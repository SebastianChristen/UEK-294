import { useState, useEffect } from "react"
import Link from "next/link"

export default function PostsPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const loadPosts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const posts = await response.json()
            setPosts(posts)
        }
        loadPosts()
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {
                    posts.map(post => {
                        return (
                            <li>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                                <Link href={`/posts/${post.id}/comments`}>Kommentare</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}