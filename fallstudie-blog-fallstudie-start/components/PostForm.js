import { createPost, updatePost } from "@/lib/api/posts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./PostForm.module.css";
import { useSession } from "@/lib/hooks/session";

const defaultModel = {
  title: "",
  text: "",
};
const URL = `http://localhost:9001/api/posts`;

function validateModel(post) {
  const errors = {
    title: "",
    text: "",
  };
  let isValid = false;

  if (!post.title) {
    errors.title = "DU KANNST KEINEN LEEREN TITEL HABEN DU IDIOT";
  } else if (!post.text) {
    errors.text = "DU KANNST KEINEN LEEREN TEXT HABEN DU IDIOT";
  } else {
    isValid = true;
  }

  return { errors, isValid };
}

export default function PostForm({ postToEdit }) {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(defaultModel);
  const [post, setPost] = useState(defaultModel);

  useEffect(() => {
    //zunächst müssen wir den alten post laden, bevor wir ihn bearbeiten können.
    if (!postToEdit) return;
    const loadPost = async () => {
      const response = await fetch(`${URL}/${postToEdit}`);
      const postData = await response.json();
      //eventuell auch setPost({ ...postData, id: postToEdit });
      setPost(postData);
    };
    loadPost();
  }, [postToEdit]);

  const handleChange = (e) => {
    //Hier ist das mit den mehreren Variablen
    const inputValue = e.target.value;
    const inputName = e.target.name;
    //Wichtig: "...post,", sonst macht er die beiden sachen net zusammen
    setPost({ ...post, [inputName]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors(defaultModel);

    const result = validateModel(post);

    if (!result.isValid) {
      setErrors(result.errors);
      setIsLoading(false);
      return;
    }

    if (post.id) {
      console.log("I am now sending your goofy ahh post...");
      // das AWAIT hier ist wichtig, damit es wartet.
      await updatePost(post, session.token);
    } else {
      await createPost(post, session.token);
    }
    setIsLoading(false);
    // hier wennes fertig ist geht's wieder auf die startseite zurück
    router.push("/");
  };

  return (
    <div className={styles.postform}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Blog title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
          {errors.title && <div className={styles.error}>{errors.title}</div>}

          <label>Blog text</label>
          <input
            type="text"
            name="text"
            value={post.text}
            onChange={handleChange}
          />
          {errors.text && <div className={styles.error}>{errors.text}</div>}
        </fieldset>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "...Loading" : "Submit"}
        </button>
      </form>
    </div>
  );
}
