import style from './CityItem.module.scss';


const CityItem = (props) => {
  const {city} = props;
  return (
    <li className={style.cityItem}>
      <h4>{city.station}</h4>
      <p>{city.name}</p>
    </li>
  )
}

export default CityItem
