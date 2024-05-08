import { useRouter } from "next/router";
import SinglePost from "@/components/SinglePost";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <article>
      <h2>Post mit id: {id}</h2>
      <SinglePost id={id}></SinglePost>
    </article>
  );
}
