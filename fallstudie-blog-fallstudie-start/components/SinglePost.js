import { useState } from "react";
import { useEffect } from "react";
//import styles from "./AllPosts.module.css";
import Link from "next/link";
import { deletePost } from "@/lib/api/posts";
import { useRouter } from "next/router";

export default function SinglePost({ id }) {
  const [blog, setBlog] = useState([]);
  const router = useRouter();
  const isSignedIn = useRouter();
  const session = useRouter();

  const URL = `http://localhost:9001/api/posts`;

  async function handleClick() {
    await deletePost(id, session.token);
    router.push("/");
  }

  useEffect(() => {
    if (!id) return;
    const loadBlog = async () => {
      const response = await fetch(URL + "/" + id);
      const blog = await response.json();
      setBlog(blog);
      console.log("hello world ", response);
    };
    loadBlog();
  }, [id]);

  return (
    <div key={blog.id}>
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.text}</p>
        <p> created at: {blog.createdAt}</p>
        <p> modified at: {blog.updatedAt}</p>
      </div>

      {isSignedIn && (
        <div>
          <Link href={blog.id + "/edit"}>Edit this blog</Link>
          <button onClick={handleClick}>Delete</button>
        </div>
      )}
    </div>
  );
}
