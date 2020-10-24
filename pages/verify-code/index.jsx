import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import BlueBtn from '../../Components/BlueBtn/BlueBtn';
import Timer from '../../Components/Timer/Timer';
import InputCode from '../../Components/VerifyCodeInput/VerifyCodeInput';
import { RESEND_CODE_TIME, VERIFY_CODE_LENGTH } from '../../utils/constants';

import style from './verify-code.module.scss'

const VerifyCode = () => {
  const [code, setCode] = useState([...Array(VERIFY_CODE_LENGTH)].map(() => ""));
  const userPhone = useSelector(state => state.signUpReducer.userPhone);

  return (
    <main className={style.verifyCode}>
      <Head>
        <title>Taxxx - Подтверждение</title>
      </Head>
      <h2>Код подтверждения</h2>
      <Link href={'/sign-up'}>
        <span className={style.verifyCode__backLink}>
          <img src="/Images/ic_arrow.svg" width="30" height="30"/>
        </span>
      </Link>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('It works!');
      }}>
        <p>Код подтверждения был отправлен на номер<br/> {userPhone}</p>
        <InputCode
          length={VERIFY_CODE_LENGTH}
          code={code}
          setCode={setCode}
        />
        <BlueBtn text={"Подтвердить регистрацию"}/>
        <Timer duration={RESEND_CODE_TIME}/>
      </form>
    </main>
  )
};

export default VerifyCode;