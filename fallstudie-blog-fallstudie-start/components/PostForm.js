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

        // Hier solltest du den Post validieren, das errors Objekt erstellen 
    // und isValid auf false setzen, falls nötig


    return { errors, isValid }
}

export default function PostForm({ postToEdit }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)
    const [post, setPost] = useState(defaultModel)

    useEffect(() => {

    }, [postToEdit])

    const handleChange = (e) => {

        const inputValue = e.target.value
        setPost(inputValue);

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

        } else {

        }
        setIsLoading(false)
    }

    return (
        <div className={styles.postform}>
            <form onSubmit={handleSubmit}>

                    <fieldset>
        <label>Blog title</label>
        <input type="text" name="blogtitle" value={post.title} onChange={handleChange} />
        { errors.blogtitle && <div className={styles.error}>{errors.blogtitle}</div>}

        <label>Blog text</label>
        <input type="text" name="blogtext" value={post.text} onChange={handleChange} />
        { errors.blogtext && <div className={styles.error}>{errors.blogtext}</div>}
        </fieldset>



        

                <button disabled={isLoading}>
                    {isLoading ? "...Loading" : "Submit"}
                </button>
            </form>
        </div>
    )
}