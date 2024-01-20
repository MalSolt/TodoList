import React, { useState } from 'react'
import styles from './item.module.scss'
import { useTodoStore } from 'store'
import { Todo } from 'types'
import { useBoolean } from 'hooks/use-boolean'

export const Item = ({ text, id }: Todo) => {
  const removeTodo = useTodoStore((state) => state.removeTodo)
  const updateTodo = useTodoStore((state) => state.updateTodo)
  const [newText, setNewText] = useState(text)
  const [isEditing, openEditing, closeEditing] = useBoolean(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && text) {
      setNewText('')
      updateTodo({ text: newText, id })
      closeEditing()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.text} onClick={openEditing}>
        {isEditing ? (
          <input
            autoFocus
            id='add-todo'
            className={styles.input}
            value={newText}
            onChange={handleChange}
            type='text'
            onKeyDown={handleKeyDown}
          />
        ) : (
          text
        )}
      </div>
      <div className={styles.delete} onClick={() => removeTodo(id)}>
        &times;
      </div>
    </div>
  )
}
