import React, { useState } from 'react'
import { useTodoStore } from 'store'
import styles from './add-todo.module.scss'

export const AddTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo)
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && text) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor='add-todo'>
        add todo
      </label>
      <input
        autoFocus
        id='add-todo'
        className={styles.input}
        value={text}
        onChange={handleChange}
        type='text'
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
