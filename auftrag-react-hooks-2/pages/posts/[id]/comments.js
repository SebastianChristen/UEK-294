import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const URL = "https://jsonplaceholder.typicode.com/posts/1/comments";
export default function commentsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (!id) return;
    console.log("useeffect works");
    useEffect(() => {
         const loadComments = async () => {
          const response = await fetch(URL);
          const comment = await response.json();
          console.log(response);
          setComments(comment);
            };

        loadComments();
      }, []);
    


  return (
    <div>
      <h2> Comments</h2>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <div>
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </div>
          </li>
        );
      })}
    </div>
  );
}
