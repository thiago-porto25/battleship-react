import React from 'react'
import Footer from '../components/Footer'

export default function InitialPage({ setIsInitial, setIsPreparing }) {
  const handleClick = () => {
    setIsInitial(false)
    setIsPreparing(true)
  }

  return (
    <>
      <div className="init-container">
        <h1>BATTLESHIP</h1>
        <button onClick={handleClick}>New Game</button>
      </div>
      <Footer />
    </>
  )
}
