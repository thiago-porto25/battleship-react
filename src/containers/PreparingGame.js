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

  const handlePrepClick = () => {
    return 1
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
        <div>
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
            <button>Carrier</button>
            <button>Battleship</button>
            <button>Warship</button>
            <button>Submarine</button>
            <button>Patrol Boat</button>
          </div>
        </div>
        <button disabled={!allPrepared} onClick={handleStartGame}>
          Start Game
        </button>
      </div>
      <Footer />
    </>
  )
}
