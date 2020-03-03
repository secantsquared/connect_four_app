const one = 'player1'
const two = 'player2'

export default function GameReducer(state, action) {
  const currentHole = state.holes.find(item => item.id === action.id)
  if (currentHole && currentHole.isOccupied) {
    return state
  }
  switch (action.type) {
    case one:
      return {
        holes: [
          ...state.holes.slice(0, action.id),
          { id: action.id, isOccupied: 'player1', tokenColor: 'red' },
          ...state.holes.slice(action.id + 1)
        ],
        currentPlayer: 'player2',
        moveCount: state.moveCount + 1
      }
    case two:
      return {
        holes: [
          ...state.holes.slice(0, action.id),
          { id: action.id, isOccupied: 'player2', tokenColor: 'blue' },
          ...state.holes.slice(action.id + 1)
        ],
        currentPlayer: 'player1',
        moveCount: state.moveCount + 1
      }
    default:
      return state
  }
}
