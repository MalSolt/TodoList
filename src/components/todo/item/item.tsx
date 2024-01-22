import { Input } from 'components/common'
import { useBoolean } from 'hooks/use-boolean'
import { useState } from 'react'
import { useTodoStore } from 'store'
import { Todo } from 'types'
import styles from './item.module.scss'

export const Item = ({ text, id }: Todo) => {
  const removeTodo = useTodoStore((state) => state.removeTodo)
  const updateTodo = useTodoStore((state) => state.updateTodo)
  const [newText, setNewText] = useState(text)
  const [isEditing, openEditing, closeEditing] = useBoolean(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(event.target.value)
  }

  const handleUpdateTodo = () => {
    if (text) {
      setNewText('')
      updateTodo({ text: newText, id })
      closeEditing()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.text} onClick={openEditing}>
        {isEditing ? (
          <Input
            autoFocus
            type='text'
            value={newText}
            onChange={handleChange}
            onEnter={handleUpdateTodo}
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
