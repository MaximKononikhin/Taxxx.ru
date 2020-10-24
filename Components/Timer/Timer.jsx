import { useState, useEffect } from 'react';
import { getMinsAndSecs } from '../../utils/helpers';

import style from "./Timer.module.scss";

const Timer = (props) => {
  const {duration} = props;
  
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      time > 0 && setTime(time - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [time])

  return (
    <a className={style.timer}>Выслать код повторно {getMinsAndSecs(time)}</a>
  )
}

export default Timer;