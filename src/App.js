import React, { useState } from 'react'
import InitialPage from './containers/InitialPage'
import PreparingGame from './containers/PreparingGame'
import MainGame from './containers/MainGame'

function App() {
  const [isInitial, setIsInitial] = useState(true)
  const [isPreparing, setIsPreparing] = useState(false)
  const [isMainGame, setIsMainGame] = useState(false)
  return (
    <div className="App">
      {isInitial && (
        <InitialPage
          setIsInitial={setIsInitial}
          setIsPreparing={setIsPreparing}
        />
      )}
      {isPreparing && (
        <PreparingGame
          setIsPreparing={setIsPreparing}
          setIsMainGame={setIsMainGame}
        />
      )}
      {isMainGame && <MainGame />}
    </div>
  )
}

export default App
