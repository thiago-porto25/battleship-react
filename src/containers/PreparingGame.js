/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Square from '../components/Square'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function PreparingGame({
  setIsPreparing,
  setIsMainGame,
  board,
  setBoard,
  headerMessage,
  setHeaderMessage,
}) {
  const [allPrepared, setAllPrepared] = useState(false)
  const [isPlacingShip, setIsPlacingShip] = useState(false)
  const [count, setCount] = useState(0)
  const [Axis, setAxis] = useState('X')

  useEffect(() => setHeaderMessage('Pick a Ship!'), [])

  const handlePrepClick = (target) => {
    if (!isPlacingShip) return
    if (target.getAttribute('disabled') === '') return

    const targetId = parseInt(target.getAttribute('data-id'), 10)

    if (
      Axis === 'X' &&
      (targetId === 9 ||
        targetId === 19 ||
        targetId === 29 ||
        targetId === 39 ||
        targetId === 49 ||
        targetId === 59 ||
        targetId === 69 ||
        targetId === 79 ||
        targetId === 89 ||
        targetId === 99 ||
        board[targetId + 1] !== 'water' ||
        (board[targetId + 2] !== 'water' && targetId + 2 <= 99))
    ) {
      setHeaderMessage('Not Allowed!')
      setTimeout(
        () =>
          setHeaderMessage(
            `Place your ${
              isPlacingShip === 'patrol' ? 'patrol boat' : isPlacingShip
            }!`
          ),
        1000
      )
      return
    }

    if (
      Axis === 'Y' &&
      (targetId === 90 ||
        targetId === 91 ||
        targetId === 92 ||
        targetId === 93 ||
        targetId === 94 ||
        targetId === 95 ||
        targetId === 96 ||
        targetId === 97 ||
        targetId === 98 ||
        targetId === 99 ||
        board[targetId + 10] !== 'water' ||
        (board[targetId + 20] !== 'water' && targetId + 20 <= 99))
    ) {
      setHeaderMessage('Not Allowed!')
      setTimeout(
        () =>
          setHeaderMessage(
            `Place your ${
              isPlacingShip === 'patrol' ? 'patrol boat' : isPlacingShip
            }!`
          ),
        1000
      )
      return
    }

    if (
      Axis === 'X' &&
      (isPlacingShip === 'battleship' || isPlacingShip === 'carrier') &&
      (targetId === 7 ||
        targetId === 17 ||
        targetId === 27 ||
        targetId === 37 ||
        targetId === 47 ||
        targetId === 57 ||
        targetId === 67 ||
        targetId === 77 ||
        targetId === 87 ||
        targetId === 97 ||
        board[targetId + 4] !== 'water')
    ) {
      setHeaderMessage('Not Allowed!')
      setTimeout(() => setHeaderMessage(`Place your ${isPlacingShip}!`), 1000)
      return
    }

    if (
      Axis === 'Y' &&
      (isPlacingShip === 'battleship' || isPlacingShip === 'carrier') &&
      (targetId === 70 ||
        targetId === 71 ||
        targetId === 72 ||
        targetId === 73 ||
        targetId === 74 ||
        targetId === 75 ||
        targetId === 76 ||
        targetId === 77 ||
        targetId === 78 ||
        targetId === 79 ||
        (board[targetId + 40] !== 'water' && targetId + 40 <= 99))
    ) {
      setHeaderMessage('Not Allowed!')
      setTimeout(() => setHeaderMessage(`Place your ${isPlacingShip}!`), 1000)
      return
    }

    if (
      Axis === 'X' &&
      (isPlacingShip === 'warship' ||
        isPlacingShip === 'submarine' ||
        isPlacingShip === 'battleship' ||
        isPlacingShip === 'carrier') &&
      (targetId === 8 ||
        targetId === 18 ||
        targetId === 28 ||
        targetId === 38 ||
        targetId === 48 ||
        targetId === 58 ||
        targetId === 68 ||
        targetId === 78 ||
        targetId === 88 ||
        targetId === 98 ||
        board[targetId + 3] !== 'water')
    ) {
      setHeaderMessage('Not Allowed!')
      setTimeout(() => setHeaderMessage(`Place your ${isPlacingShip}!`), 1000)
      return
    }

    if (
      Axis === 'Y' &&
      (isPlacingShip === 'warship' ||
        isPlacingShip === 'submarine' ||
        isPlacingShip === 'battleship' ||
        isPlacingShip === 'carrier') &&
      (targetId === 80 ||
        targetId === 81 ||
        targetId === 82 ||
        targetId === 83 ||
        targetId === 84 ||
        targetId === 85 ||
        targetId === 86 ||
        targetId === 87 ||
        targetId === 88 ||
        targetId === 89 ||
        (board[targetId + 30] !== 'water' && targetId + 30 <= 99))
    ) {
      setHeaderMessage('Not Allowed!')
      setTimeout(() => setHeaderMessage(`Place your ${isPlacingShip}!`), 1000)
      return
    }

    if (
      Axis === 'X' &&
      isPlacingShip === 'carrier' &&
      (targetId === 6 ||
        targetId === 16 ||
        targetId === 26 ||
        targetId === 36 ||
        targetId === 46 ||
        targetId === 56 ||
        targetId === 66 ||
        targetId === 76 ||
        targetId === 86 ||
        targetId === 96 ||
        board[targetId + 5] !== 'water')
    ) {
      setHeaderMessage('Not Allowed!')
      setTimeout(() => setHeaderMessage(`Place your ${isPlacingShip}!`), 1000)
      return
    }

    if (
      Axis === 'Y' &&
      isPlacingShip === 'carrier' &&
      (targetId === 60 ||
        targetId === 61 ||
        targetId === 62 ||
        targetId === 63 ||
        targetId === 64 ||
        targetId === 65 ||
        targetId === 66 ||
        targetId === 67 ||
        targetId === 68 ||
        targetId === 69 ||
        (board[targetId + 50] !== 'water' && targetId + 50 <= 99))
    ) {
      setHeaderMessage('Not Allowed!')
      setTimeout(() => setHeaderMessage(`Place your ${isPlacingShip}!`), 1000)
      return
    }

    const newBoard = board.map((item, i) => {
      if (isPlacingShip === 'carrier') {
        if (Axis === 'X') {
          if (targetId === i) return isPlacingShip
          else if (targetId + 1 === i) return isPlacingShip
          else if (targetId + 2 === i) return isPlacingShip
          else if (targetId + 3 === i) return isPlacingShip
          else if (targetId + 4 === i) return isPlacingShip
        } else if (Axis === 'Y') {
          if (targetId === i) return isPlacingShip
          else if (targetId + 10 === i) return isPlacingShip
          else if (targetId + 20 === i) return isPlacingShip
          else if (targetId + 30 === i) return isPlacingShip
          else if (targetId + 40 === i) return isPlacingShip
        }
      }
      if (isPlacingShip === 'battleship') {
        if (Axis === 'X') {
          if (targetId === i) return isPlacingShip
          else if (targetId + 1 === i) return isPlacingShip
          else if (targetId + 2 === i) return isPlacingShip
          else if (targetId + 3 === i) return isPlacingShip
        } else if (Axis === 'Y') {
          if (targetId === i) return isPlacingShip
          else if (targetId + 10 === i) return isPlacingShip
          else if (targetId + 20 === i) return isPlacingShip
          else if (targetId + 30 === i) return isPlacingShip
        }
      }
      if (isPlacingShip === 'warship') {
        if (Axis === 'X') {
          if (targetId === i) return isPlacingShip
          else if (targetId + 1 === i) return isPlacingShip
          else if (targetId + 2 === i) return isPlacingShip
        } else if (Axis === 'Y') {
          if (targetId === i) return isPlacingShip
          else if (targetId + 10 === i) return isPlacingShip
          else if (targetId + 20 === i) return isPlacingShip
        }
      }
      if (isPlacingShip === 'submarine') {
        if (Axis === 'X') {
          if (targetId === i) return isPlacingShip
          else if (targetId + 1 === i) return isPlacingShip
          else if (targetId + 2 === i) return isPlacingShip
        } else if (Axis === 'Y') {
          if (targetId === i) return isPlacingShip
          else if (targetId + 10 === i) return isPlacingShip
          else if (targetId + 20 === i) return isPlacingShip
        }
      }
      if (isPlacingShip === 'patrol') {
        if (Axis === 'X') {
          if (targetId === i) return isPlacingShip
          else if (targetId + 1 === i) return isPlacingShip
        } else if (Axis === 'Y') {
          if (targetId === i) return isPlacingShip
          else if (targetId + 10 === i) return isPlacingShip
        }
      }
      if (item !== 'water') return item
      else return 'water'
    })

    setBoard(newBoard)
    setIsPlacingShip(false)
    setHeaderMessage('Pick a ship!')
    if (count === 5) {
      setAllPrepared(true)
      setHeaderMessage('start game!')
    }
  }

  const handleShipClick = (target, ship) => {
    if (isPlacingShip) return
    target.classList.toggle('selected')
    setHeaderMessage(`Place your ${ship === 'patrol' ? 'patrol boat' : ship}!`)
    setIsPlacingShip(ship)
    setCount((prev) => prev + 1)
    target.disabled = true
  }

  const handleAxisChange = () => {
    setAxis((prev) => (prev === 'X' ? 'Y' : 'X'))
  }

  const handleStartGame = () => {
    setIsPreparing(false)
    setIsMainGame(true)
  }

  const shipButtonsStyle = {
    pointerEvents: isPlacingShip ? 'none' : allPrepared ? 'none' : '',
  }

  return (
    <>
      <div className="prep-container">
        <Header message={headerMessage} />
        <div className="prep-board-and-ships">
          <div className="prep-board-container">
            <div className="prep-board">
              {board.map((item, i) => (
                <Square
                  key={`${item}-${i}`}
                  boardId={i}
                  onClick={({ target }) => handlePrepClick(target)}
                  colorCode={item === 'water' ? 'white' : 'gray'}
                  name="prep"
                  isPlacingShip={isPlacingShip}
                />
              ))}
            </div>
          </div>
          <div className="prep-ships-axis">
            <button onClick={handleAxisChange} disabled={!isPlacingShip}>
              Current Axis: {Axis}
            </button>
          </div>
          <div className="prep-ships-container">
            <div className="prep-ships-buttons">
              <button
                style={shipButtonsStyle}
                onClick={({ target }) => handleShipClick(target, 'carrier')}
              >
                Carrier
              </button>
              <button
                style={shipButtonsStyle}
                onClick={({ target }) => handleShipClick(target, 'battleship')}
              >
                Battleship
              </button>
              <button
                style={shipButtonsStyle}
                onClick={({ target }) => handleShipClick(target, 'warship')}
              >
                Warship
              </button>
              <button
                style={shipButtonsStyle}
                onClick={({ target }) => handleShipClick(target, 'submarine')}
              >
                Submarine
              </button>
              <button
                style={shipButtonsStyle}
                onClick={({ target }) => handleShipClick(target, 'patrol')}
              >
                Patrol Boat
              </button>
            </div>
            <div className="prep-start-container">
              <button disabled={!allPrepared} onClick={handleStartGame}>
                Start Game
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
