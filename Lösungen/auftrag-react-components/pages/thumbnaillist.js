import ThumbnailList from "../components/ThumbnailList"
import Thumbnail from "../components/Thumbnail"


const thumbnails = [
    { title: "Learning react", views: 3425, channelName: "1337 Coding Tutorials", description: "LIKE AND SUBSCRIBE!", img: "https://via.placeholder.com/360x200" },
    { title: "Learning java", views: 345345, channelName: "1337 Coding Tutorials", description: "LIKE AND SUBSCRIBE!", img: "https://via.placeholder.com/360x200" },
    { title: "Learning javascript", views: 789789, channelName: "1337 Coding Tutorials", description: "LIKE AND SUBSCRIBE!", img: "https://via.placeholder.com/360x200" },
    { title: "Learning c#", views: 78, channelName: "1337 Coding Tutorials", description: "LIKE AND SUBSCRIBE!", img: "https://via.placeholder.com/360x200" },
    { title: "Learning nothing", views: 789, channelName: "1337 Coding Tutorials", description: "LIKE AND SUBSCRIBE!", img: "https://via.placeholder.com/360x200" },
]

export default function ThumbnailListPage() {
    return (
        <div>
            <ThumbnailList title="My cool coding videos">
                {thumbnails.map(thumbnail => {
                    return <Thumbnail title={thumbnail.title} views={thumbnail.views} channelName={thumbnail.channelName} description={thumbnail.description} img={thumbnail.img} />
                })}
            </ThumbnailList>


            <ThumbnailList title="My cool coding videos">
                {thumbnails.map(thumbnail => {
                    return <Thumbnail {...thumbnail} />
                })}
            </ThumbnailList>
        </div>

    )
}
