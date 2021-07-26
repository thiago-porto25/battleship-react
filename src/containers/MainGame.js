import React, { useState } from 'react'
import Footer from '../components/Footer'

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

  return (
    <>
      <div>TEsting</div>
      <Footer />
    </>
  )
}
