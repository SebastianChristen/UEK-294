import { useState } from "react";
import { login } from "@/lib/api/auth";
import { useRouter } from "next/router";
import { useSession } from "@/lib/hooks/session";

export default function PostsCreatePage() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const { session, isSignedIn, signIn, signOut } = useSession();

  const handleChange = (e) => {
    //Hier ist das mit den mehreren Variablen
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setUser({ ...user, [inputName]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = user.email;
    const password = user.password;

    const session = await login({ email, password });

    signIn(session);

    console.log(session);

    // hier wenn es fertig ist geht's wieder auf die startseite zurück
    router.push("/");
  };

  return (
    <div>
      <h1>Login</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>username</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <br></br>
            <label>Blog text</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </fieldset>

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
