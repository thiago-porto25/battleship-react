import React from 'react'
export default function WinnerModal({ handlePlayAgain }) {
  return (
    <section className="modal">
      <div className="modal-inner">
        <h1>Play Again?</h1>
        <button onClick={handlePlayAgain}>New Game</button>
      </div>
    </section>
  )
}
