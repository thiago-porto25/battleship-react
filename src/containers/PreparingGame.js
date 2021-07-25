import React, { useState } from 'react'
import Square from '../components/Square'
import Footer from '../components/Footer'
// pesquisar como fazer aquilo de clicar em algo e essa coisa seguir o mouse e fazer o hover em uma coisa e outras tambem mudar
//////////////USE CSS IN REACT FOR STYLES THAT NEED VARIABLES

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

  const handlePrepClick = (target) => {
    if (!isPlacingShip) return
    console.log(target.getAttribute('disabled'))
    if (target.getAttribute('disabled') === '') return

    const targetId = parseInt(target.getAttribute('data-id'), 10)

    if (
      targetId === 9 ||
      targetId === 19 ||
      targetId === 29 ||
      targetId === 39 ||
      targetId === 49 ||
      targetId === 59 ||
      targetId === 69 ||
      targetId === 79 ||
      targetId === 89 ||
      targetId === 99
    ) {
      return
    }

    if (
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
        targetId === 97)
    ) {
      return
    }

    if (
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
        targetId === 98)
    ) {
      return
    }

    if (
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
        targetId === 96)
    ) {
      return
    }

    const newBoard = board.map((item, i) => {
      if (isPlacingShip === 'carrier') {
        if (targetId === i) return isPlacingShip
        else if (targetId + 1 === i) return isPlacingShip
        else if (targetId + 2 === i) return isPlacingShip
        else if (targetId + 3 === i) return isPlacingShip
        else if (targetId + 4 === i) return isPlacingShip
      }
      if (isPlacingShip === 'battleship') {
        if (targetId === i) return isPlacingShip
        else if (targetId + 1 === i) return isPlacingShip
        else if (targetId + 2 === i) return isPlacingShip
        else if (targetId + 3 === i) return isPlacingShip
      }
      if (isPlacingShip === 'warship') {
        if (targetId === i) return isPlacingShip
        else if (targetId + 1 === i) return isPlacingShip
        else if (targetId + 2 === i) return isPlacingShip
      }
      if (isPlacingShip === 'submarine') {
        if (targetId === i) return isPlacingShip
        else if (targetId + 1 === i) return isPlacingShip
        else if (targetId + 2 === i) return isPlacingShip
      }
      if (isPlacingShip === 'patrol') {
        if (targetId === i) return isPlacingShip
        else if (targetId + 1 === i) return isPlacingShip
      }
      if (item !== 'water') return item
      else return 'water'
    })

    setBoard(newBoard)
    setIsPlacingShip(false)
    if (count === 5) setAllPrepared(true)
  }

  const handleShipClick = (target, ship) => {
    if (isPlacingShip) return
    target.classList.toggle('selected')
    setHeaderMessage(`Place your ${ship}!`)
    setIsPlacingShip(ship)
    setCount((prev) => prev + 1)
    target.disabled = 'true'
  }

  const handleStartGame = () => {
    setIsPreparing(false)
    setIsMainGame(true)
  }

  return (
    <>
      <div className="prep-container">
        <header>
          <h1 className="logo">BATTLESHIP</h1>
        </header>
        <div className="prep-header-message">
          <p>{headerMessage}</p>
        </div>
        <div className="prep-board-and-ships">
          <div className="prep-board-container">
            <div className="prep-board">
              {board.map((item, i) => (
                <Square
                  key={`${item}-${i}`}
                  boardId={i}
                  onClick={({ target }) => handlePrepClick(target)}
                  colorCode={item === 'water' ? 'white' : 'gray'}
                />
              ))}
            </div>
          </div>
          <div className="prep-ships-container">
            <div className="prep-ships-buttons">
              <button
                onClick={({ target }) => handleShipClick(target, 'carrier')}
              >
                Carrier
              </button>
              <button
                onClick={({ target }) => handleShipClick(target, 'battleship')}
              >
                Battleship
              </button>
              <button
                onClick={({ target }) => handleShipClick(target, 'warship')}
              >
                Warship
              </button>
              <button
                onClick={({ target }) => handleShipClick(target, 'submarine')}
              >
                Submarine
              </button>
              <button
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
