import React, { useState } from 'react'

export default function Square({ onClick, colorCode, boardId }) {
  const [isMouseIn, setIsMouseIn] = useState(false)

  const styles = {
    backgroundColor: isMouseIn ? 'rgb(150, 150, 150)' : colorCode,
    border: isMouseIn ? '2px solid gray' : '1px solid black',
  }

  return (
    <div
      className="board-square"
      style={styles}
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
      onClick={onClick}
      data-id={boardId}
      disabled={colorCode === 'gray' ? true : false}
    ></div>
  )
}
