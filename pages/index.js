import Head from 'next/head'
import { useState } from 'react';
import { Swipeable } from 'react-swipeable'
import CityItem from '../Components/CityItem/CityItem';
import Map from '../Components/Map/Map';
import SearchInput from '../Components/SearchInput/SearchInput';

import style from '../styles/Home.module.scss';

const citiesExample = [
  {id: 1, name: 'Нью-Йорк', station: 'Kings Cross Underground Station'},
  {id: 2, name: 'Нью-Йорк', station: 'Kings Cross Underground Station'},
  {id: 3, name: 'Нью-Йорк', station: 'Kings Cross Underground Station'},
  {id: 4, name: 'Нью-Йорк', station: 'Kings Cross Underground Station'},
  {id: 5, name: 'Нью-Йорк', station: 'Kings Cross Underground Station'},
  {id: 6, name: 'Нью-Йорк', station: 'Kings Cross Underground Station'},
  {id: 7, name: 'Нью-Йорк', station: 'Kings Cross Underground Station'},
  {id: 8, name: 'Нью-Йорк', station: 'Kings Cross Underground Station'},
]

export default function Home() {
  const [isModalOpen, switchModal] = useState(false);
  const [address, setAddress] = useState('');

  const addressHandler = (evt) => {
    setAddress(evt.target.value);
  }
  return (
    <>
      <Head>
        <title>Taxxx.ru</title>
      </Head>
      <main className={style.main}>
        <Map/>
        <Swipeable style={isModalOpen? {top: '21vh'} : {top: '68.5vh'}} className={style.addressSection} onSwipedUp={() => switchModal(true)} onSwipedDown={() => switchModal(false)}>
          <SearchInput value={address} handler={addressHandler} onFocusHandler={() => switchModal(true)}/>
          <ul className={style.citiesList}>
            {citiesExample.map(city => <CityItem key={city.id} city={city}/>)}
          </ul>
        </Swipeable>
      </main>
    </>
  )
}
