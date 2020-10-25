import React from 'react'

import style from './SearchInput.module.scss';

const SearchInput = (props) => {
  const  {value, handler, onFocusHandler} = props;
  return (
    <span className={style.searchInput}>
      <input 
        id="search"
        type="text"
        name="search"
        value={value}
        onChange={(e) => handler(e)}
        onFocus={onFocusHandler}
      />
      
    </span>
    
  )
}

export default SearchInput;
