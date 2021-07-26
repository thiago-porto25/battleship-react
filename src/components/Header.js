import React from 'react'

export default function Header({ message }) {
  return (
    <>
      <header>
        <h1 className="logo">BATTLESHIP</h1>
      </header>
      <div className="header-message">
        <p>{message}</p>
      </div>
    </>
  )
}
