import React, { useReducer, useContext } from 'react'
import GameReducer from '../store/GameReducer'
import GameContext from '../store/GameContext'
import Board from './Board'

const App = () => {
  const initialState = useContext(GameContext)
  const [state, dispatch] = useReducer(GameReducer, initialState)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <Board />
    </GameContext.Provider>
  )
}

export default App
