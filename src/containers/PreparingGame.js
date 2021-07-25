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

  const handlePrepClick = () => {
    return 1
  }

  const handleShipClick = (target, ship) => {
    if (isPlacingShip) return
    target.classList.toggle('selected')
    setHeaderMessage(`Place your ${ship}!`)
    setIsPlacingShip(ship)
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
                  //onClick={({ target }) => handlePrepClick(target)}
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
                onClick={({ target }) => handleShipClick(target, 'patrol boat')}
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
