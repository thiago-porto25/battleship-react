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

  const handleAIMove = () => {}

  const handlePlayerMove = (target) => {
    const targetId = parseInt(target.getAttribute('data-id'), 10)
    if (AIBoard[targetId] === 'hit' || AIBoard[targetId] === 'water hit') return

    const newAIBoard = AIBoard.map((item, index) => {
      if (targetId === index) {
        switch (item) {
          case 'water':
            return 'water hit'
          case 'carrier':
            AIShips.carrier.getHit()
            return 'hit'
          case 'battleship':
            AIShips.battleship.getHit()
            return 'hit'
          case 'warship':
            AIShips.warship.getHit()
            return 'hit'
          case 'submarine':
            AIShips.submarine.getHit()
            return 'hit'
          case 'patrol':
            AIShips.patrol.getHit()
            return 'hit'
          default:
            return item
        }
      } else return item
    })
    console.log(newAIBoard)
    setAIBoard(newAIBoard)
  }

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
                name="player"
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
                colorCode={
                  item === 'hit'
                    ? 'red'
                    : item === 'water hit'
                    ? 'blue'
                    : 'white'
                }
                name="AI"
                onClick={({ target }) => handlePlayerMove(target)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
