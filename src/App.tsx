import { AddTodo, List } from 'components/todo'
import React from 'react'
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <AddTodo />
      <List />
    </div>
  )
}

export default App
