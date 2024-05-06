// components/Button.js

import styles from "./Button.module.css";

export default function Button({text, variant}) {


    let color1 = "";

    if (variant == "default") { color1 = "blue"}
    else if (variant == "success") { color1 = "green"}
    else if (variant == "danger") { color1 = "red"}
    else if (variant == "warning") { color1 = "yellow"}
    else if (variant == "info") { color1 = "cyan"}

    let color = color1

  return (
    
   //<button style={{'background-color': color}}>{text}</button>
    <button className={styles.buttonClass} style={{'background-color': color}}>{text}</button>

  );


}
