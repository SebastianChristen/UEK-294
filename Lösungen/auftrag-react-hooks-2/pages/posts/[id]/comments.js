import { useState, useEffect } from "react"
import {useRouter} from "next/router"
import Link from "next/link"

export default function CommentsPage() {
    const router = useRouter()
    const { id } = router.query

    const [comments, setComments] = useState([])

    useEffect(() => {
        if(!id) return
        const loadComments= async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            const comments = await response.json()
            setComments(comments)
        }
        loadComments()
    }, [id])

    return (
        <div>
            <Link href={`/posts`}>Back to posts</Link>
            <ul>
                {
                    comments.map(comment => {
                        return (
                            <li>
                                <h2>{comment.email}</h2>
                                <p>{comment.body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}