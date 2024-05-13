import MyComponent from "../components/MyComponent"
import Button from "../components/Button"
import WordReverser from "../components/WordReverser"
import ShoppingList from "../components/ShoppingList"
import Thumbnail from "../components/Thumbnail"
import ThumbnailList from "../components/ThumbnailList"
import ChessBoard from "../components/ChessBoard"

const items = [
    { name: "Milk", amount: 2 },
    { name: "Eggs", amount: 6 },
    { name: "Bread", amount: 1 }
]

const thumbnail = {
    title: "Learning react",
    views: 12312313,
    channelName: "1337 Coding Tutorials",
    description: "LIKE AND SUBSCRIBE!",
    img: "https://via.placeholder.com/360x200"
}

const thumbnails = [
    { title: "Learning react", views: 3425, channelName: "1337 Coding Tutorials", description: "LIKE AND SUBSCRIBE!", img: "https://via.placeholder.com/360x200" },
    { title: "Learning java", views: 345345, channelName: "1337 Coding Tutorials", description: "LIKE AND SUBSCRIBE!", img: "https://via.placeholder.com/360x200" },
    { title: "Learning javascript", views: 789789, channelName: "1337 Coding Tutorials", description: "LIKE AND SUBSCRIBE!", img: "https://via.placeholder.com/360x200" },
    { title: "Learning c#", views: 78, channelName: "1337 Coding Tutorials", description: "LIKE AND SUBSCRIBE!", img: "https://via.placeholder.com/360x200" },
    { title: "Learning nothing", views: 789, channelName: "1337 Coding Tutorials", description: "LIKE AND SUBSCRIBE!", img: "https://via.placeholder.com/360x200" },
]

export default function AllPage() {
    return (
        <div>
            <MyComponent />

            <Button text="Default" variant="default" />

            <Button text="Success" variant="success" />

            <Button text="Danger" variant="danger" />

            <Button text="Warning" variant="warning" />

            <Button text="Info" variant="info" />

            <WordReverser word="Hallo React World!" />

            <ShoppingList title="Breakfast Shopping List" items={items} />

            <Thumbnail 
                title={thumbnail.title} 
                views={thumbnail.views} 
                channelName={thumbnail.channelName} 
                description={thumbnail.description} 
                img={thumbnail.img} />

            {/* Verkürzer Aufruf mit spread (...) Operator */}
            <Thumbnail {...thumbnail} />
            <Thumbnail thumbnail={thumbnail}/>

            <ThumbnailList title="My cool coding videos">
                {thumbnails.map(thumbnail => {
                    return <Thumbnail key={thumbnail.title} title={thumbnail.title} views={thumbnail.views} channelName={thumbnail.channelName} description={thumbnail.description} img={thumbnail.img} />
                })}
            </ThumbnailList>


            <ThumbnailList title="My cool coding videos">
                {thumbnails.map(thumbnail => {
                    return <Thumbnail key={thumbnail.title} {...thumbnail} />
                })}
            </ThumbnailList>

            <ChessBoard />
        </div>
    )
}
