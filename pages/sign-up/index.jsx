import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BlueBtn from '../../Components/BlueBtn/BlueBtn';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import Input from '../../Components/Input/Input';
import PasswordInput from '../../Components/PasswordInput/PasswordInput';
import PhoneInput from '../../Components/PhoneInput/PhoneInput';
import RequirementsList from '../../Components/RequirementsList/RequirementsList';
import { registerUser, setUserName, setUserPassword, setUserPhone, switchRegisterErr } from '../../Store/sign-up-screen/actions';
import { validateName, validatePassword, validatePhone } from '../../utils/helpers';
import style from './signup.module.scss';

const SignUp = () => {
  const userName = useSelector(state => state.signUpReducer.userName);
  const userPassword = useSelector(state => state.signUpReducer.userPassword);
  const userPhone = useSelector(state => state.signUpReducer.userPhone);
  const isRegistrationErr = useSelector(state => state.signUpReducer.isRegistrationErr);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const userInfo = {
    contact: Number(userPhone.replace(/[{()}]/g, '').replace(/-/g, '').slice(2, 13)),
    password: userPassword,
    name: userName
  }

  const historyPush = () => {
    router.push("verify-code");
  }
  

  const handleNameInput = (e) => {
    dispatch(setUserName(e.target.value));
    dispatch(switchRegisterErr(false))
  }

  const handlePasswordInput = (e) => {
    dispatch(setUserPassword(e.target.value));
    dispatch(switchRegisterErr(false))
  }

  const handlePhoneInput = (e) => {
    dispatch(setUserPhone(e.target.value));
    dispatch(switchRegisterErr(false))
  }

  const validateUserInfo = () => {
    if (!validateName(userName) || !validatePassword(userPassword) || !validatePhone(userPhone)) {
      return false
    } 
    return true;
  }

  return (
    <main className={style.signUp}>
      <Head>
        <title>Taxxx - Регистрация</title>
      </Head>
      <h2>Регистрация</h2>
      {isRegistrationErr && <ErrorMessage topPosition={'11.3vh'} text="Проверьте корректность введенных данных"/>}
      <form onSubmit={(e) => {
        e.preventDefault();
        validateUserInfo()? dispatch(registerUser(userInfo, historyPush)) : dispatch(switchRegisterErr(true));
      }}>
        <Input 
          id={"userName"}
          label={"Имя пользователя"}
          type={"text"}
          name={"userName"}
          value={userName}
          handler={handleNameInput}
          modificator={true}
        />
        <RequirementsList isError={isRegistrationErr}>
          <li>от 3 до 25 символов</li>
          <li>кириллица или латиница</li>
          <li>без спецсимволов и цифр</li>
        </RequirementsList>
        <PhoneInput
          id={"userPhone"}
          label={'Номер телефона'}
          name={"userPhone"}
          value={userPhone}
          handler={handlePhoneInput}
          modificator={true}
        />
        <RequirementsList isError={isRegistrationErr}>
          <li>10 цифр, не включая код страны</li>
        </RequirementsList>
        <PasswordInput
          id={'userPassword'}
          value={userPassword}
          label={'Пароль'}
          name={'userPassword'}
          handler={handlePasswordInput}
          modificator={true}
        />
        <RequirementsList isError={isRegistrationErr}>
          <li>от 8 до 80 символов</li>
          <li>минимум одна заглавная буква</li>
          <li>минимум одна строчная буква</li>
          <li>минимум одна цифра</li>
        </RequirementsList>
        <BlueBtn disabled={isRegistrationErr} text={'Зарегистрироваться'}/>
      </form>
      <footer style={{marginTop: 'auto'}}>
        <p>Уже есть аккаунт?</p>
        <Link href={'/sign-in'}>Войти</Link>
      </footer>
    </main>
  )
};

export default SignUp;