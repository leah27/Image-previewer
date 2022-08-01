import React from 'react'
import style from './Img.module.css'
import select from '../../images/select.png'

const Img = ({ currentImg }) => {
  return (
    <div className={style.container}>
      <img className={style.img} alt="img" src={currentImg === '' ? select : currentImg} />
    </div>
  )
}

export default Img
