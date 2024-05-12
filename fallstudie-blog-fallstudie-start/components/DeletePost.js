import Router from "next/router";

export default function DeletePost({ idToDelete }) {
  const URL = `http://localhost:9001/api/posts`;

  // ------------------ hier patch, also einfach updaten, da ich ja nicht ein neuen post machen will
  async function deletePost() {
    const response = await fetch(URL + "/" + idToDelete, {
      method: "DELETE",
      //Braucht kein Body
    });

    if (!response.ok) {
      return Promise.reject(response.statusText);
    }

    const data = await response.json();
    console.log(data);

    Router.push("/");
  }

  return (
    <div>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}
