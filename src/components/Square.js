import React, { useState } from 'react'

export default function Square({ onClick = false }) {
  const [isMouseIn, setIsMouseIn] = useState(false)

  return (
    <div
      className="board-square"
      style={{ backgroundColor: isMouseIn ? 'rgb(44, 44, 44)' : 'white' }}
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
      onClick={onClick}
    ></div>
  )
}
