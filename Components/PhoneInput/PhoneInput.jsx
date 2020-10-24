import styles from './PhoneInput.module.scss';
import InputMask from 'react-input-mask';

const PhoneInput = (props) => {
  const {id, label, name, value, handler, modificator} = props;
  return (
    <div className={styles.inputPhone} style={modificator && {marginBottom: '10px'}}>
      <label htmlFor={id}>{label}</label>
      <InputMask
       id={id}
       name={name}
       mask="+7(999)999-99-99"
       onChange={handler}
       placeholder="+7(___)___ __-__"
       value={value}/>
    </div>
  )
};

export default PhoneInput;