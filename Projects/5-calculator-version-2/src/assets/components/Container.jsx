import React, { Children } from 'react'
import style from "./Container.module.css"

function Container(props) {
  return (
    <div className={style.container}>
      {props.children}
    </div>
  )
}

export default Container
