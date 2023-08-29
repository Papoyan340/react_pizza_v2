import React from 'react'

import styles from './NotFoundBlock.module.scss'

function NodFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
         <span>😕</span><br/>
         Страница не найдена
      </h1>
      <p className={styles.description}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  )
}

export default NodFoundBlock