import { createPost, updatePost } from "@/lib/api/posts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./PostForm.module.css";

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
  // Hier solltest du den Post validieren, das errors Objekt erstellen
  // und isValid auf false setzen, falls nötig

  return { errors, isValid };
}

export default function PostForm({ postToEdit }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(defaultModel);
  const [post, setPost] = useState(defaultModel);

  useEffect(() => {
    //zunächst müssen wir den alten post laden, bevor wir ihn bearbeiten können.
    if (!postToEdit) return;
    const loadPost = async () => {
      const response = await fetch(`${URL}/${postToEdit}`);

      //setpost(post) === postdata
      const postData = await response.json();
      setPost({ ...postData, id: postToEdit }); // Stelle sicher, dass die ID im post-Objekt gesetzt ist
    };
    loadPost();
  }, [postToEdit]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    // Hier ist das mit den mehreren Variablen
    //Wichtig: "...post,", sonst macht er die beiden sachen net zusammen
    setPost({ ...post, [inputName]: inputValue });
  };

  // hier patch, also einfach updaten, da ich ja nicht ein neuen post machen will
  async function patchTheFuckingThing(post) {
    const response = await fetch(URL + "/" + postToEdit, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      return Promise.reject(response.statusText);
    }

    const data = await response.json();

    console.log(data);
  }

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
      // Post updaten per fetch und mit setPost aktualisieren
      console.log("I am now sending your goofy ahh post...");

      // --- das AWAIT hier ist unglaublich wichtig!!!!!!
      await patchTheFuckingThing(post);
    } else {
      // Post erstellen per fetch und mit router.push auf die Postdetail Seite weiterleiten
      //TODO
    }
    setIsLoading(false);
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
