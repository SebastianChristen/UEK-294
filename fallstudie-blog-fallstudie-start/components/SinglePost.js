import { useState } from "react";
import { useEffect } from "react";
//import styles from "./AllPosts.module.css";
import Link from "next/link";

export default function SinglePost({ id }) {
  const [blog, setBlog] = useState([]);

  const URL = `http://localhost:9001/api/posts`;

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
      <Link href={blog.id + "/edit"}>Edit this blog</Link>
    </div>
  );
}
