import { createPost, updatePost } from "@/lib/api/posts"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./PostForm.module.css"

const defaultModel = {
    title: "",
    text: ""
}

function validateModel(post) {
    const errors = {
        title: "",
        text: ""
    }
    let isValid = true

    if (post.title.trim().length === 0) {
        errors.title = "Title cant't be empty"
        isValid = false
    }

    if (post.text.trim().length === 0) {
        errors.text = "Text cant't be empty"
        isValid = false
    }

    return { errors, isValid }
}

export default function PostForm({ postToEdit }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)
    const [post, setPost] = useState(defaultModel)

    useEffect(() => {
        if (postToEdit) {
            setPost(postToEdit)
        }
    }, [postToEdit])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPost({
            ...post,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        const result = validateModel(post)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }
        

        if (post.id) {
            try {
                await updatePost(post)
                alert("Post updated!")
                router.push(`/posts/${post.id}`)
            } catch (e) {
                alert("Could not update post")
            }
        } else {
            try {
                const newPost = await createPost(post)
                alert("Post created!")
                router.push(`/posts/${newPost.id}`)
            } catch (e) {
                alert("Could not create post")
            }
        }
        setIsLoading(false)
    }

    return (
        <div className={styles.postform}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleChange} value={post.title} />
                    {errors.title && <div className={styles.error}>{errors.title}</div>}
                </fieldset>

                <fieldset>
                    <label>Text:</label>
                    <textarea name="text" onChange={handleChange} value={post.text} />
                    {errors.text && <div className={styles.error}>{errors.text}</div>}
                </fieldset>

                <button disabled={isLoading}>
                    {isLoading ? "...Loading" : "Submit"}
                </button>
            </form>
        </div>
    )
}