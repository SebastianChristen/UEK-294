import Header from "./../components/Header"
import Navigation from "./../components/Navigation"
import "./_app.css"

export default function App({ Component, pageProps }) {
    return (
        <div className="app">
            <Header />

            <Navigation items={[
                { href: "/", name: "Index" },
                { href: "/buttons", name: "Buttons" },
                { href: "/wordreverser", name: "Wordreverser Page" },
                { href: "/shoppinglist", name: "Shopping List Page" },
                { href: "/thumbnail", name: "Thumbnail Page" },
                { href: "/thumbnaillist", name: "Thumbnail List" },
                { href: "/chessboard", name: "Chessboard page" },
                { href: "/all", name: "All Page" }
            ]} />

            <Component {...pageProps} />
        </div>
    )
}