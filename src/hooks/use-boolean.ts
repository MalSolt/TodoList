import { useState } from 'react'

export const useBoolean = (initialState: boolean) => {
  const [state, setState] = useState(initialState)

  const setTrue = () => setState(true)
  const setFalse = () => setState(false)

  return [state, setTrue, setFalse] as const
}
