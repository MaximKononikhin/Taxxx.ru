import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

import BlueBtn from '../../Components/BlueBtn/BlueBtn';
import PhoneInput from '../../Components/PhoneInput/PhoneInput';
import PasswordInput from '../../Components/PasswordInput/PasswordInput';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import style from './signin.module.scss';
import { validatePassword, validatePhone } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, switchLoginErr } from '../../Store/sign-in-screen/actions';

const SignIn = () => {
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const isLoginError = useSelector(state => state.signInReducer.isLoginError);
  const dispatch = useDispatch();
  const router = useRouter();

  const userInfo = {
    contact: Number(userPhone.replace(/[{()}]/g, '').replace(/-/g, '').slice(2, 13)),
    password: userPassword
  }

  const historyPush = () => {
    router.push('/');
  }

  const handlePhoneInput = (e) => {
    setUserPhone(e.target.value);
    dispatch(switchLoginErr(false));
  }

  const handlePasswordInput = (e) => {
    setUserPassword(e.target.value);
    dispatch(switchLoginErr(false));
  }

  const validateUserInfo = () => {
    if (!validatePassword(userPassword) || !validatePhone(userPhone)) {
      return false
    } 
    return true;
  }

  return (
    <main className={style.signIn}>
      <Head>
        <title>Taxxx - Вход</title>
      </Head>
      <h2>Вход</h2>
      {isLoginError && <ErrorMessage topPosition={'24.3vh'} text={"Неверный логин или пароль"}/>}
      <form onSubmit={(e) => {
        e.preventDefault();
        validateUserInfo()? dispatch(loginUser(userInfo, historyPush)) : dispatch(switchLoginErr(true));
      }}>
        <PhoneInput
          id={"userPhone"}
          label={'Номер телефона'}
          name={"userPhone"}
          value={userPhone}
          handler={handlePhoneInput}
        />
        <PasswordInput
          id={'userPassword'}
          value={userPassword}
          label={'Пароль'}
          name={'userPassword'}
          handler={handlePasswordInput}
        />
        <BlueBtn disabled={isLoginError} text={'Войти'}/>
      </form>
      <footer>
        <p>Нет аккаунта?</p>
        <Link href={'/sign-up'}>Зарегистрироваться</Link>
      </footer>
    </main>
  )
};

export default SignIn;