// pages/about.js

import styles from "./about.module.css";
import Link from "next/link"

export default function AboutPage() {
  console.log(styles);

  return (
    <div className={styles.about}>
      <h1>About page!</h1>

      <div className={styles.container}>
        <h2>JSX</h2>
        // man kann ausdrücke und variablen und funktionen im html haben
        <div>{5 + 5}</div>
        <div>{message}</div>
        <div>{someFunction()}</div>
        {aDiv}


        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <br />
        <input
          onClick={(e) => console.log("click")}
          type="text"
          id="country"
          name="country"
          value="Schweiz"
        />


        <div className={styles.content}>
          <p>
            It is called JSX, and it is a syntax extension to JavaScript. We
            recommend using it with React to describe what them UI should look
            like. JSX may remind you of a template language, but it comes with
            the full power of JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
}

const message = "I am a string!";

const someFunction = () => {
  return "I am also a string!";
};

const aDiv = <div>Hello, I am a div in JSX!</div>;
