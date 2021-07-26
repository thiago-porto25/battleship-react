import createBoard from './createBoard'
const selectAIBoard = () => {
  const board = createBoard()

  const randomNumber = Math.floor(Math.random() * 5 + 1)

  if (randomNumber === 1) {
    board.splice(2, 5, 'carrier', 'carrier', 'carrier', 'carrier', 'carrier')
    board.splice(35, 4, 'battleship', 'battleship', 'battleship', 'battleship')
    board.splice(86, 3, 'warship', 'warship', 'warship')
    board.splice(40, 1, 'submarine')
    board.splice(50, 1, 'submarine')
    board.splice(60, 1, 'submarine')
    board.splice(78, 1, 'patrol')
    board.splice(68, 1, 'patrol')
  } else if (randomNumber === 2) {
    board.splice(0, 5, 'carrier', 'carrier', 'carrier', 'carrier', 'carrier')
    board.splice(9, 1, 'battleship')
    board.splice(19, 1, 'battleship')
    board.splice(29, 1, 'battleship')
    board.splice(39, 1, 'battleship')
    board.splice(22, 1, 'warship')
    board.splice(32, 1, 'warship')
    board.splice(42, 1, 'warship')
    board.splice(46, 3, 'submarine', 'submarine', 'submarine')
    board.splice(70, 1, 'patrol')
    board.splice(60, 1, 'patrol')
  } else if (randomNumber === 3) {
    board.splice(32, 5, 'carrier', 'carrier', 'carrier', 'carrier', 'carrier')
    board.splice(3, 4, 'battleship', 'battleship', 'battleship', 'battleship')
    board.splice(66, 3, 'warship', 'warship', 'warship')
    board.splice(85, 3, 'submarine', 'submarine', 'submarine')
    board.splice(93, 2, 'patrol', 'patrol')
  } else if (randomNumber === 4) {
    board.splice(50, 1, 'carrier')
    board.splice(60, 1, 'carrier')
    board.splice(70, 1, 'carrier')
    board.splice(80, 1, 'carrier')
    board.splice(90, 1, 'carrier')
    board.splice(45, 4, 'battleship', 'battleship', 'battleship', 'battleship')
    board.splice(25, 3, 'warship', 'warship', 'warship')
    board.splice(11, 3, 'submarine', 'submarine', 'submarine')
    board.splice(97, 2, 'patrol', 'patrol')
  } else if (randomNumber === 5) {
    board.splice(15, 1, 'carrier')
    board.splice(25, 1, 'carrier')
    board.splice(35, 1, 'carrier')
    board.splice(45, 1, 'carrier')
    board.splice(55, 1, 'carrier')
    board.splice(22, 1, 'battleship')
    board.splice(32, 1, 'battleship')
    board.splice(42, 1, 'battleship')
    board.splice(52, 1, 'battleship')
    board.splice(95, 3, 'warship', 'warship', 'warship')
    board.splice(70, 3, 'submarine', 'submarine', 'submarine')
    board.splice(48, 2, 'patrol', 'patrol')
  }

  return board
}

export default selectAIBoard
