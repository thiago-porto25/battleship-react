import React, { useState } from 'react'

export default function Square({
  onClick,
  colorCode,
  boardId,
  name,
  currentPlayer,
  isPlacingShip,
}) {
  const [isMouseIn, setIsMouseIn] = useState(false)

  const chooseStyle = () => {
    const prepStyles = {
      backgroundColor: isMouseIn ? 'rgb(210, 210, 210)' : colorCode,
      pointerEvents:
        colorCode === 'gray' ? 'none' : !isPlacingShip ? 'none' : '',
    }

    const playerStyles = {
      backgroundColor: colorCode,
    }

    const AIStyles = {
      backgroundColor:
        isMouseIn && colorCode === 'white' ? 'rgb(210, 210, 210)' : colorCode,
      pointerEvents: currentPlayer === 'AI' ? 'none' : '',
    }

    if (name === 'prep') return prepStyles
    if (name === 'player') return playerStyles
    if (name === 'AI') return AIStyles
  }
  return (
    <div
      className={`board-square ${name}`}
      style={chooseStyle()}
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
      onClick={onClick}
      data-id={boardId}
      disabled={colorCode === 'gray' ? true : false}
    ></div>
  )
}
