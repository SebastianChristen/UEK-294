import Thumbnail from "../components/Thumbnail.js";

export default function ThumbnailPage() {
  return (
    <div>
      <h1>Youtube</h1>
      <Thumbnail
         thumbnails={[
          {
            title: "Learning react",
            views: 12312313,
            channelName: "1337 Coding Tutorials",
            description: "LIKE AND SUBSCRIBE!",
            img: "https://via.placeholder.com/360x200",
          },
        ]}
      />
    </div>
  );
}
