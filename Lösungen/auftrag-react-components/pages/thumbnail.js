import Thumbnail from "../components/Thumbnail"

const thumbnail = {
    title: "Learning react",
    views: 12312313,
    channelName: "1337 Coding Tutorials",
    description: "LIKE AND SUBSCRIBE!",
    img: "https://via.placeholder.com/360x200"
}

export default function ThumbnailPage() {
    return (
        <div>
            <Thumbnail
                title={thumbnail.title}
                views={thumbnail.views}
                channelName={thumbnail.channelName}
                description={thumbnail.description}
                img={thumbnail.img}
            />


            {/* Verkürzer Aufruf mit spread (...) Operator */}
            <Thumbnail {...thumbnail} />
        </div>
    )
}
