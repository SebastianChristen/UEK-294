import { useRouter } from "next/router"
import PostForm from "@/components/PostForm"

export default function PostsEditPage() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1>Edit post with id: {id}</h1>
            <PostForm></PostForm>
        </div>
    )
}