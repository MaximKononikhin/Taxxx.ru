import Head from 'next/head'
import AddressModal from '../Components/AddressModal/AddressModal';
import Map from '../Components/Map/Map';

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Taxxx.ru</title>
      </Head>
      <main className={styles.main}>
        <Map/>
        <AddressModal/>
      </main>
    </>
  )
}
