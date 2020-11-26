import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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

  const isAuthNeed = useSelector(state => state.signInReducer.isAuthNeed);

  const router = useRouter();

  const addressHandler = (evt) => {
    setAddress(evt.target.value);
  }

  // useEffect(() => {
  //   if (isAuthNeed) {
  //     router.push('sign-in');
  //   }
  // }, [])

  if(isAuthNeed) {
    return (
      <>
        <Head>
          <title>Taxxx.ru</title>
        </Head>
        <main className={style.main}>
          <Map/>
          <Swipeable style={isModalOpen? {top: '21vh'} : {top: '68.5vh'}} className={style.addressSection} onSwipedUp={() => switchModal(true)} onSwipedDown={() => switchModal(false)}>
            <div className={style.addressSection__wrapper}>
              <input type="text" placeholder="Адрес отправления" onFocus={() =>switchModal(true)}/>
              <input type="text" placeholder="Адрес прибытия" onFocus={() =>switchModal(true)}/>
              <img src="/Images/ic_route.svg" width="16" height="65"/>
            </div>
            <ul className={style.citiesList}>
              {citiesExample.map(city => <CityItem key={city.id} city={city}/>)}
            </ul>
          </Swipeable>
        </main>
      </>
    )
  }
  return null
}
