/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Square from '../components/Square'
import WinnerModal from '../components/WinnerModal'
import { createShips, selectAIBoard, createBoard } from '../utils'
import clone from 'just-clone'

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
  const [currentPlayer, setCurrentPlayer] = useState('human')
  const [playerShips, setPlayerShips] = useState(createShips())
  const [AIShips, setAIShips] = useState(createShips())

  const handleAIMove = () => {
    if (isWinner) return

    let randId
    while (true) {
      const randomNum = Math.floor(Math.random() * 100)
      if (
        humanBoard[randomNum] !== 'hit' &&
        humanBoard[randomNum] !== 'water hit'
      ) {
        randId = randomNum
        break
      }
    }

    const newPlayerShips = clone(playerShips)
    const newHumanBoard = humanBoard.map((item, index) => {
      if (randId === index) {
        switch (item) {
          case 'water':
            return 'water hit'
          case 'carrier':
            newPlayerShips.carrier.getHit()
            return 'hit'
          case 'battleship':
            newPlayerShips.battleship.getHit()
            return 'hit'
          case 'warship':
            newPlayerShips.warship.getHit()
            return 'hit'
          case 'submarine':
            newPlayerShips.submarine.getHit()
            return 'hit'
          case 'patrol':
            newPlayerShips.patrol.getHit()
            return 'hit'
          default:
            return item
        }
      } else return item
    })

    setHumanBoard(newHumanBoard)
    setPlayerShips(newPlayerShips)
    const bool = newPlayerShips.checkWinner()
    setIsWinner(bool)

    if (bool) {
      setHeaderMessage('Too bad! The Computer wins!')
    } else {
      setHeaderMessage("Player's turn")
      setCurrentPlayer('player')
    }
  }

  const handlePlayerMove = (target) => {
    const targetId = parseInt(target.getAttribute('data-id'), 10)
    if (AIBoard[targetId] === 'hit' || AIBoard[targetId] === 'water hit') return

    const newAIShips = clone(AIShips)
    const newAIBoard = AIBoard.map((item, index) => {
      if (targetId === index) {
        switch (item) {
          case 'water':
            return 'water hit'
          case 'carrier':
            newAIShips.carrier.getHit()
            return 'hit'
          case 'battleship':
            newAIShips.battleship.getHit()
            return 'hit'
          case 'warship':
            newAIShips.warship.getHit()
            return 'hit'
          case 'submarine':
            newAIShips.submarine.getHit()
            return 'hit'
          case 'patrol':
            newAIShips.patrol.getHit()
            return 'hit'
          default:
            return item
        }
      } else return item
    })
    setAIBoard(newAIBoard)
    setAIShips(newAIShips)
    const bool = newAIShips.checkWinner()
    setIsWinner(bool)

    if (bool) {
      setHeaderMessage('Congratulations! Player wins!')
    } else {
      setHeaderMessage("Computer's turn")
      setCurrentPlayer('AI')
      setTimeout(() => handleAIMove(), 800)
    }
  }

  const handlePlayAgain = () => {
    setIsPreparing(true)
    setIsMainGame(false)
  }

  useEffect(() => {
    setHeaderMessage('Your Move!')

    return () => {
      setHumanBoard(createBoard())
      setAIBoard(selectAIBoard())
    }
  }, [])

  return (
    <>
      <Header message={headerMessage} />
      <div className="main-board-container">
        <div className="main-player-container">
          <header>Player</header>
          <div className="main-board human">
            {humanBoard.map((item, i) => (
              <Square
                key={`${item}-${i}`}
                boardId={i}
                colorCode={
                  item === 'water'
                    ? 'white'
                    : item === 'hit'
                    ? '#af0000'
                    : item === 'water hit'
                    ? '#00009d'
                    : 'gray'
                }
                name="player"
              />
            ))}
          </div>
        </div>
        <div className="main-AI-container">
          <header>Computer</header>
          <div className="main-board AI">
            {AIBoard.map((item, i) => (
              <Square
                key={`${item}-${i}`}
                boardId={i}
                colorCode={
                  item === 'hit'
                    ? '#af0000'
                    : item === 'water hit'
                    ? '#00008c'
                    : 'white'
                }
                name="AI"
                onClick={({ target }) => {
                  handlePlayerMove(target)
                }}
                currentPlayer={currentPlayer}
              />
            ))}
          </div>
        </div>
      </div>
      {isWinner && <WinnerModal handlePlayAgain={handlePlayAgain} />}
      <Footer />
    </>
  )
}
