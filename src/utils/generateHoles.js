export default function generateHoles() {
  const holes = []

  for (let i = 0; i < 16; i++) {
    holes.push({ id: i, isOccupied: false, tokenColor: null })
  }
  return holes
}
