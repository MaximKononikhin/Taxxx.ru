import { useState } from "react";

import styles from './PasswordInput.module.scss';


const PasswordInput = (props) => {
  const {id, label, name, value, handler, modificator} = props;
  const [isVisible, setVisability] = useState(false);
  return (
    <div className={styles.passwordField} style={modificator && {marginBottom: '10px'}}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={isVisible? 'text' : 'password'}
        name={name}
        autoComplete="off"
        value={value}
        onChange={(e) => handler(e)}
      />
      <button onClick={(e) => {
        e.preventDefault();
        setVisability(!isVisible)
      }}>
        <img src={isVisible? '/Images/eye.svg' : '/Images/crossEye.svg'} alt=""/>
        
      </button>
    </div>
  )
};

export default PasswordInput;