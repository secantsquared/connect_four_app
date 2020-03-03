import React, { useContext } from 'react'
import Hole from './Hole'
import GameStatus from './GameStatus'
import GameContext from './GameContext'

import './styles/Board.css'

const Board = () => {
  const { state } = useContext(GameContext)

  const playerOneHoles = state.holes.filter(
    hole => hole.isOccupied === 'player1'
  )

  const playerTwoHoles = state.holes.filter(
    hole => hole.isOccupied === 'player2'
  )

  const playerOneIds = playerOneHoles.map(hole => hole.id)
  const playerTwoIds = playerTwoHoles.map(hole => hole.id)

  return (
    <div className="Board">
      {state.holes.map((hole, idx) => (
        <Hole key={idx} hole={hole} />
      ))}
      <GameStatus playerOneIds={playerOneIds} playerTwoIds={playerTwoIds} />
    </div>
  )
}

export default Board
