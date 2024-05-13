import styles from "./ThumbnailList.module.css"

export default function ThumbnailList({ title, children }) {
    return (
        <div className={styles.thumbNailList}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}
