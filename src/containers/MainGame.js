/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { createShips } from '../utils/createShips'

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

  return (
    <>
      <Header message={headerMessage} />
      <div>TEsting</div>
      <Footer />
    </>
  )
}
