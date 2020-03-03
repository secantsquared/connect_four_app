import React, { useContext } from 'react'
import GameContext from './GameContext'

const GameStatus = props => {
  const { state } = useContext(GameContext)

  if (state.moveCount === 16) {
    return <div>GAME OVER DRAW!</div>
  } else {
    return <div>{state.currentPlayer}</div>
  }
}

export default GameStatus
