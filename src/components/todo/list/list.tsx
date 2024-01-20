import React from 'react'
import { useTodoStore } from 'store'
import styles from './list.module.scss'
import { Item } from '..'

export const List = () => {
  const list = useTodoStore((state) => state.list)

  return (
    <div className={styles.wrapper}>
      {list.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </div>
  )
}
