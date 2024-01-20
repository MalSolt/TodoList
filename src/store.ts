import { nanoid } from 'nanoid'
import { Todo } from 'types'
import { create } from 'zustand'

interface State {
  list: Todo[]
  addTodo: (text: Todo['text']) => void
  updateTodo: (newTodo: Todo) => void
  removeTodo: (id: Todo['id']) => void
}

export const useTodoStore = create<State>()((set) => ({
  list: [],
  addTodo: (text) => set((state) => ({ list: [...state.list, { text, id: nanoid() }] })),
  updateTodo: (newTodo) =>
    set((state) => ({ list: state.list.map((todo) => (todo.id === newTodo.id ? newTodo : todo)) })),
  removeTodo: (id) => set((state) => ({ list: state.list.filter((todo) => todo.id !== id) })),
}))
