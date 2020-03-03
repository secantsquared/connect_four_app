import React from 'react'
import generateHoles from '../utils/generateHoles'

const holes = generateHoles()

const state = { holes, currentPlayer: 'player1', moveCount: 0 }

const GameContext = React.createContext(state)

export default GameContext
