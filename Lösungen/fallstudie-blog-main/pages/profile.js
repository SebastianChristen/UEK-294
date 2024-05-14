import { useSession } from "@/lib/hooks/session"

export default function ProfilePage() {
    const { session } = useSession()
    return (
        <div style={{ overflow: "hidden" }}>
            <h1>Your current session:</h1>
            <pre>{JSON.stringify(session, null, 4)}</pre>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            secured: true
        }
    }
}