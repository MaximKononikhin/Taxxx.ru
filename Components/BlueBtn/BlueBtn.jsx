import style from './BlueBtn.module.scss';

const BlueBtn = React.memo((props) => {
  return (
    <button className={style.blueBtn} disabled={props.disabled}>{props.text}</button>
  )
});

export default BlueBtn;