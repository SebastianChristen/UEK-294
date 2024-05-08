import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const URL = "https://jsonplaceholder.typicode.com/posts";
export default function commentsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [comments, setComments] = useState([]);
  useEffect(() => {
    // vvvvv Das hier ist sehr wichtig!!!
    if (!id) return;
    const loadComments = async () => {
      const response = await fetch(URL + "/" + id + "/comments");
      const comment = await response.json();
      setComments(comment);
    };

    loadComments();
    // vvvvv Das hier ist sehr wichtig!!!
  }, [id]);

  return (
    <div>
      <h2> Comments for post Nr. {id}</h2>
      <hr></hr>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <div>
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
