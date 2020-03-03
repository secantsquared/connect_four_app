import React, { useContext } from 'react'
import { wins } from '../wins'
import GameContext from './GameContext'

const GameStatus = props => {
  const { state } = useContext(GameContext)

  if (
    (!wins.includes(props.playerOneIds) ||
      !wins.includes(props.playerTwoIds)) &&
    state.moveCount === 16
  ) {
    return <div>GAME OVER DRAW!</div>
  } else {
    return <div>{state.currentPlayer}</div>
  }
}

export default GameStatus
