import { nanoid } from 'nanoid'
import { Todo } from 'types'
import { create } from 'zustand'

interface TodoState {
  list: Todo[]
  add: (newTodo: Todo) => void
  update: (newTodo: Todo) => void
  remove: (id: Todo['id']) => void
}

const initialState: Todo[] = [
  { id: nanoid(), text: 'Malik' },
  { id: nanoid(), text: 'Soltukiev' },
]

export const useTodoStore = create<TodoState>()((set) => ({
  list: initialState,
  add: (newTodo) => set((state) => ({ list: [...state.list, newTodo] })),
  update: (newTodo) =>
    set((state) => ({ list: state.list.map((todo) => (todo.id === newTodo.id ? newTodo : todo)) })),
  remove: (id) => set((state) => ({ list: state.list.filter((todo) => todo.id !== id) })),
}))
