import { Input } from 'components/common'
import { useState } from 'react'
import { useTodoStore } from 'store'
import styles from './add-todo.module.scss'

export const AddTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo)
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleAddTodo = () => {
    if (text) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor='add-todo'>
        add todo
      </label>
      <Input
        autoFocus
        type='text'
        id='add-todo'
        value={text}
        onChange={handleChange}
        onEnter={handleAddTodo}
      />
    </div>
  )
}
