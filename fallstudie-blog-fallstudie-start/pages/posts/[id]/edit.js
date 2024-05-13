import { useRouter } from "next/router"
import PostForm from "@/components/PostForm"

export default function PostsEditPage() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1>Edit post with id: {id}</h1>
            <PostForm postToEdit={id}></PostForm>
        </div>
    )
}


export async function getStaticProps(context) {
    return {
        props: {
            secured: true
        }
    }
}

export async function getStaticPaths(context) {
    return {
        fallback: true,
        paths: []
    }
}
