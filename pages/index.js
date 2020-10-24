import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Taxxx.ru</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.mapSection}>
          <img src="/Images/map.png"></img>
        </section>
      </main>
    </>
  )
}
