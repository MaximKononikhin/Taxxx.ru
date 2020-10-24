import React from 'react'
import style from './ErrorMessage.module.scss';

const ErrorMessage = ({text, topPosition}) => {
  return (
    <p className={style.errorMessage} style={{top: topPosition}}>{text}</p>
  )
}

export default ErrorMessage;
