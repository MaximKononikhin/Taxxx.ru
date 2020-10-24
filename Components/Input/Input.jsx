import styles from './Input.module.scss';

const Input = (props) => {
  const {id, label, type, name, value, handler, modificator} = props;

  return (
    <div className={styles.inputField} style={modificator && {marginBottom: '10px'}}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(e) => handler(e)}
      />
    </div>
  )
};

export default Input;