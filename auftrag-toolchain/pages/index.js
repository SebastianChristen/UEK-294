import styles from "./index.module.css";

export default function IndexPage() {
  return (
    <div className={styles.index}>
      <Head>
        <title>My page title</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.index}>
        <h1>Hello world!</h1>
      </div>

      <img src="/nextjs-logo.svg" />

      <Link href="/about">about</Link>
    </div>
  );
}

