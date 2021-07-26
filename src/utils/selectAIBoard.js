import createBoard from './createBoard'
const selectAIBoard = () => {
  const board = createBoard()

  const randomNumber = Math.floor(Math.random() * 5 + 1)

  if (randomNumber === 1) {
    board.splice(2, 5, 'carrier', 'carrier', 'carrier', 'carrier', 'carrier')
    board.splice(35, 4, 'battleship', 'battleship', 'battleship', 'battleship')
    board.splice(86, 3, 'warship', 'warship', 'warship')
    board.splice(40, 3, 'submarine', 'submarine', 'submarine')
    board.splice(78, 2, 'patrol', 'patrol')
  } else if (randomNumber === 2) {
    board.splice(0, 5, 'carrier', 'carrier', 'carrier', 'carrier', 'carrier')
    board.splice(75, 4, 'battleship', 'battleship', 'battleship', 'battleship')
    board.splice(22, 3, 'warship', 'warship', 'warship')
    board.splice(46, 3, 'submarine', 'submarine', 'submarine')
    board.splice(70, 2, 'patrol', 'patrol')
  } else if (randomNumber === 3) {
    board.splice(32, 5, 'carrier', 'carrier', 'carrier', 'carrier', 'carrier')
    board.splice(3, 4, 'battleship', 'battleship', 'battleship', 'battleship')
    board.splice(66, 3, 'warship', 'warship', 'warship')
    board.splice(85, 3, 'submarine', 'submarine', 'submarine')
    board.splice(93, 2, 'patrol', 'patrol')
  } else if (randomNumber === 4) {
    board.splice(90, 5, 'carrier', 'carrier', 'carrier', 'carrier', 'carrier')
    board.splice(45, 4, 'battleship', 'battleship', 'battleship', 'battleship')
    board.splice(25, 3, 'warship', 'warship', 'warship')
    board.splice(11, 3, 'submarine', 'submarine', 'submarine')
    board.splice(97, 2, 'patrol', 'patrol')
  } else if (randomNumber === 5) {
    board.splice(12, 5, 'carrier', 'carrier', 'carrier', 'carrier', 'carrier')
    board.splice(4, 4, 'battleship', 'battleship', 'battleship', 'battleship')
    board.splice(95, 3, 'warship', 'warship', 'warship')
    board.splice(70, 3, 'submarine', 'submarine', 'submarine')
    board.splice(48, 2, 'patrol', 'patrol')
  }

  return board
}

export default selectAIBoard
