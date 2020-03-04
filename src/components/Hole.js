import React, { useContext } from 'react'
import GameContext from '../store/GameContext'

import './styles/Hole.css'

const Hole = props => {
  const { state, dispatch } = useContext(GameContext)

  function handleMove() {
    const notOccupied = []

    const row = state.holes.filter(hole => {
      return (hole.id - props.hole.id) % 4 === 0
    })
    for (const obj of row) {
      if (!obj.isOccupied) {
        notOccupied.push(obj)
      }
    }

    if (notOccupied.length === 0) {
      return
    }

    return dispatch({
      type: state.currentPlayer || 'player1',
      id: notOccupied[notOccupied.length - 1].id
    })
  }

  return (
    <button className={`Hole ${props.hole.tokenColor}`} onClick={handleMove}>
      {props.hole.id}
    </button>
  )
}

export default Hole
