import React, { useState } from 'react'
import Square from '../components/Square'

export default function PreparingGame({
  setIsPreparing,
  setIsMainGame,
  board,
  setBoard,
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
    <div className="prep-container">
      <header>
        <h1 className="logo sm">BATTLESHIP</h1>
      </header>
      <p>Hi</p>
      <div className="prep-board-and-ships">
        <div className="prep-board-container">
          {board.map((item, i) => (
            <Square
              key={`${item}-${i}`}
              boardId={i}
              onClick={({ target }) => handlePrepClick(target)}
            />
          ))}
        </div>
        <div className="prep-ships-container"></div>
      </div>
      <button disabled={!allPrepared} onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  )
}
