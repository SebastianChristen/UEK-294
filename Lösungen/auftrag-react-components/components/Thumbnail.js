import styles from "./Thumbnail.module.css"

export default function Thumbnail({ title, views, channelName, description, img }) {
    return (
        <div className={styles.thumbnail}>
            <div>
                <img src={img} alt="thumbnail"/>
            </div>
            <div>
                <h2>{title}</h2>
                <span>
                    {views} - {channelName}
                </span>
                <p>{description}</p>
            </div>
        </div>
    )
}
