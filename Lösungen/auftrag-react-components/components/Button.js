import styles from "./Button.module.css"

export default function Button({ text, variant }) {
    return (
        <button className={`${styles.button} ${styles[variant]}`}>{text}</button>
    )
}
