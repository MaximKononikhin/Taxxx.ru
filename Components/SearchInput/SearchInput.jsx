import React from 'react'

import style from './SearchInput.module.scss';

const SearchInput = (props) => {
  const  {value, handler, onFocusHandler} = props;
  return (
    <input
      id="search"
      className={style.searchInput}
      type="text"
      name="search"
      value={value}
      onChange={(e) => handler(e)}
      onFocus={onFocusHandler}
    />
  )
}

export default SearchInput;
