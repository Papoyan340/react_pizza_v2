import React from 'react'

import styles from './NotFoundBlock.module.scss'
console.log(styles);
function NodFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
         <span>😕</span><br/>
         Error 404 not found 
      </h1>
      <p className={styles.description}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  )
}

export default NodFoundBlock