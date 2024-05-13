import Header from "@/components/Header";
import Link from "next/link";
import "./_app.css";
import AllPosts from "@/components/AllPosts";
import { useSession } from "@/lib/hooks/session";

export default function App({ Component, pageProps }) {
  const { isLoaded, isSignedIn, session, signOut, signIn } = useSession();

  return (
    isLoaded && (
      <>
        {isSignedIn ? (
          <>
            <p>your session name: {JSON.stringify(session.user.name)}</p>
            <button onClick={signOut}>SignOut</button>
          </>
        ) : (
          <>
            <p>You're Not Signed In</p>
            <Link href="/login">SignIn</Link>
          </>
        )}

        <Header>
          <Link href="/">blog</Link>
        </Header>

        <main className="page">
          {(!pageProps.secured || isSignedIn) && <Component {...pageProps} />}
        </main>
      </>
    )
  );
}
