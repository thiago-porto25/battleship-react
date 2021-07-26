import React, { useState } from 'react'
import Footer from '../components/Footer'
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

  const ships = createShips()

  console.log(ships.carrier)
  ships.carrier.getHit()
  ships.carrier.getHit()
  ships.carrier.getHit()
  ships.carrier.getHit()
  ships.carrier.getHit()

  ships.carrier.checkSunk()
  console.log(ships.carrier)

  return (
    <>
      <div>TEsting</div>
      <Footer />
    </>
  )
}
