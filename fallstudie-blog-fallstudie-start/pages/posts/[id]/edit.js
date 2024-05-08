import { useRouter } from "next/router"

export default function PostsEditPage() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1>Edit post with id: {id}</h1>
        </div>
    )
}