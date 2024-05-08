//posts
import { useState, useEffect } from "react";
import Link from "next/link";
const URL = "https://jsonplaceholder.typicode.com/posts";
export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetch(URL);
      const posts = await response.json();
      setPosts(posts);
    };
    loadPosts();
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <Link key={post.id} href={`/posts/${post.id}/comments`}>
            <div>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
