import React, { useState } from 'react'

export default function Square({ onClick, colorCode, boardId }) {
  const [isMouseIn, setIsMouseIn] = useState(false)

  const styles = {
    backgroundColor: isMouseIn ? 'rgb(220, 220, 220)' : 'white',
    border: isMouseIn ? '1px solid gray' : '1px solid black',
    backgroundColor: colorCode,
  }

  return (
    <div
      className="board-square"
      style={styles}
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
      onClick={onClick}
      data-id={boardId}
    ></div>
  )
}
