import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import Link from "next/link"
import "./_app.css"

export default function App({ Component, pageProps }) {
    return (
        <>
            <Header>
                <Link href="/">
                    blog
                </Link>

                <Navigation />
            </Header>

            <main className="page">
                <Component {...pageProps} />
            </main>
        </>
    )
}