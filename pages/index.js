import Link from "next/link";
import Head from "next/head";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Viking List | Home</title>
        <meta name="keywords" content="vikings" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias cupiditate
          dolorem dolorum ipsa
          mollitia reiciendis sequi ullam vel voluptates? Aliquam aliquid consequuntur fuga harum incidunt odio placeat
          reiciendis repudiandae.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias cupiditate
          dolorem dolorum ipsa
          mollitia reiciendis sequi ullam vel voluptates? Aliquam aliquid consequuntur fuga harum incidunt odio placeat
          reiciendis repudiandae.</p>
        <Link href="/vikings">
          <a className={styles.btn}>
            See Ninja Listing
          </a>
        </Link>
      </div>
    </>
  )
}
