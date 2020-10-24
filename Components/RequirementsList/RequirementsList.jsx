import React from 'react'

import style from './RequirementsList.module.scss';

const RequirementsList = (props) => {
  return (
    <div className={style.requirementsList}>
      <ul>
        {props.children}
      </ul>
      <img src={props.isError ? "/Images/cloudError.svg" : "/Images/cloud.svg"} width="20" height="20" alt=""/>
    </div>
  )
}

export default RequirementsList
