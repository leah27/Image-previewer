import React, {FC} from 'react'
import style from './Main.module.css'
import select from '../../images/select.png'

type Props = {
  currentImg: string
}

const Main: FC<Props> = ({ currentImg }) => {
  return (
    <div className={style.container}>
      <img className={style.img} alt="img" src={currentImg === '' ? select : currentImg} />
    </div>
  )
}

export default Main
