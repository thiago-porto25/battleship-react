import React, { useState } from 'react'

export default function Square({ onClick, colorCode, boardId, name }) {
  const [isMouseIn, setIsMouseIn] = useState(false)

  const chooseStyle = () => {
    const prepStyles = {
      backgroundColor: isMouseIn ? 'rgb(210, 210, 210)' : colorCode,
      border: isMouseIn ? '1px solid gray' : '1px solid black',
      pointerEvents: colorCode === 'gray' ? 'none' : '',
    }

    const AIStyles = {
      backgroundColor:
        isMouseIn && colorCode === 'white' ? 'rgb(210, 210, 210)' : colorCode,
    }

    if (name === 'prep' || name === 'player') return prepStyles
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
