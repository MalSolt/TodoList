import React from 'react'
import styles from './item.module.scss'
import { useTodoStore } from 'stores/todos'
import { Todo } from 'types'

export const Item = ({ text, id }: Todo) => {
  const remove = useTodoStore((state) => state.remove)
  const update = useTodoStore((state) => state.update)

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{text}</div>
      <div className={styles.delete} onClick={() => remove(id)}>
        &times;
      </div>
    </div>
  )
}
