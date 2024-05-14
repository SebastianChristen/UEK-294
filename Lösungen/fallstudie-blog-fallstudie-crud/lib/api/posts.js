const URL = process.env.NEXT_PUBLIC_API_URL

export async function getAllPosts() {
    const response = await fetch(`${URL}/posts`)

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function getPostById(id) {
    const response = await fetch(`${URL}/posts/${id}`)

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function createPost(post) {
    const response = await fetch(`${URL}/posts`, {
        method: "POST",
        headers: {
            "content-type": "application/json"        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function updatePost(post) {
    const response = await fetch(`${URL}/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function deletePost(id) {
    const response = await fetch(`${URL}/posts/${id}`, {
        method: "DELETE"
    })

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }
}