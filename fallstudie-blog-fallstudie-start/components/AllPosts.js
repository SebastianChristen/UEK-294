import { useState } from "react";
import { useEffect } from "react";
import styles from "./AllPosts.module.css";
import Link from "next/link";

export default function AllPosts() {
  const [blogs, setblogs] = useState([]);

  const URL = `http://localhost:9001/api/posts`;

  useEffect(() => {
    const loadBlogs = async () => {
      const response = await fetch(URL);
      const blogs = await response.json();
      console.log(response);
      setblogs(blogs);
    };
    loadBlogs();
    console.log("fetch blogs");
  }, []);

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <Link key={blog.id} className={styles.blog} href={`/posts/${blog.id}`}>
            <div className={styles.blogDiv}>
              <h2>{blog.title}</h2>
              <p>{blog.text}</p>
              <p> created at: {blog.createdAt}</p>
              <p> modified at: {blog.updatedAt}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
