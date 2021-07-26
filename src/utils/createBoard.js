const createBoard = () => {
  let newBoard = []

  for (let i = 0; i < 100; i++) {
    newBoard.push('water')
  }

  return newBoard
}

export default createBoard
