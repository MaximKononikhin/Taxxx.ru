import { useState } from 'react'
import { Swipeable } from 'react-swipeable'
import SearchInput from '../SearchInput/SearchInput';

import style from './AddressModal.module.scss';

const AddressModal = () => {
  const [isModalOpen, switchModal] = useState(false);
  const [address, setAddress] = useState('');

  const addressHandler = (evt) => {
    setAddress(evt.target.value);
  }

  return (
    <Swipeable style={isModalOpen? {top: '150px'} : {top: '556px'}} className={style.addressSection} onSwipedUp={() => switchModal(true)} onSwipedDown={() => switchModal(false)}>
      <SearchInput value={address} handler={addressHandler} onFocusHandler={() => switchModal(true)}/>
    </Swipeable>
  )
}

export default AddressModal;
