import React from 'react'
export default function WinnerModal({ handlePlayAgain }) {
  return (
    <div>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  )
}
