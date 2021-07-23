import React from 'react'

export default function InitialPage({ setIsInitial, setIsPreparing }) {
  const handleClick = () => {
    setIsInitial(false)
    setIsPreparing(true)
  }

  return (
    <div className="init-container">
      <h1 className="logo lg">BATTLESHIP</h1>
      <button onClick={handleClick}>New Game</button>
    </div>
  )
}