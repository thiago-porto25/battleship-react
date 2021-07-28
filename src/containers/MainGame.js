/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Square from '../components/Square'
import { createShips } from '../utils'

export default function MainGame({
  humanBoard,
  setHumanBoard,
  AIBoard,
  setAIBoard,
  setIsPreparing,
  setIsMainGame,
  headerMessage,
  setHeaderMessage,
}) {
  const [isWinner, setIsWinner] = useState(false)
  const [playerShips, setPlayerShips] = useState(createShips())
  const [AIShips, setAIShips] = useState(createShips())

  useEffect(() => setHeaderMessage('Your Move!'), [])

  const handlePlayAgain = () => {
    setIsPreparing(true)
    setIsMainGame(false)
  }

  return (
    <>
      <Header message={headerMessage} />
      <div className="main-board-container">
        <div>
          <header>Player</header>
          <div className="main-board human">
            {humanBoard.map((item, i) => (
              <Square
                key={`${item}-${i}`}
                boardId={i}
                colorCode={item === 'water' ? 'white' : 'gray'}
              />
            ))}
          </div>
        </div>
        <div>
          <header>Computer</header>
          <div className="main-board AI">
            {AIBoard.map((item, i) => (
              <Square
                key={`${item}-${i}`}
                boardId={i}
                colorCode={item === 'water' ? 'white' : 'gray'}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
