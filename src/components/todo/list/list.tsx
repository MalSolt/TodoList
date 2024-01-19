import React from 'react'
import { Item } from '../item/item'
import { useTodoStore } from 'stores/todos'

export const List = () => {
  const list = useTodoStore((state) => state.list)

  return (
    <>
      {list.map((todo) => (
        <Item {...todo} />
      ))}
    </>
  )
}
