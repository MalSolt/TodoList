import React from 'react'
import { useTodoStore } from 'stores/todos'

export const AddTodo = () => {
  const update = useTodoStore((state) => state.update)

  return <div>AddTodo</div>
}
