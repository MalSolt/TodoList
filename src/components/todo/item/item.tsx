import React from 'react'
import styles from './item.module.scss'

export const Item = ({ text }: { text: string }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{text}</div>
      <div className={styles.delete}>&times;</div>
    </div>
  )
}
