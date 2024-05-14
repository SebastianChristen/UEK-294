import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import { useSession } from "@/lib/hooks/session"
import { useAuthRedirect } from "@/lib/hooks/authredirect"
import Link from "next/link"
import "./_app.css"

export default function App({ Component, pageProps }) {
    const { isLoaded, isSignedIn } = useSession()
    useAuthRedirect(pageProps)
    
    return isLoaded && (
        <>
            <Header>
                <Link href="/">
                    blog
                </Link>

                <Navigation />
            </Header>

            <main className="page">
                { (!pageProps.secured || isSignedIn) && <Component {...pageProps}/>}
            </main>
        </>
    )
}