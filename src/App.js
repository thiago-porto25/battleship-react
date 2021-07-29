import React, { useState } from 'react'
import InitialPage from './containers/InitialPage'
import PreparingGame from './containers/PreparingGame'
import MainGame from './containers/MainGame'
import { createBoard, selectAIBoard } from './utils'

function App() {
  const [isInitial, setIsInitial] = useState(true)
  const [isPreparing, setIsPreparing] = useState(false)
  const [isMainGame, setIsMainGame] = useState(false)

  const [headerMessage, setHeaderMessage] = useState('')

  const [humanBoard, setHumanBoard] = useState(createBoard())
  const [AIBoard, setAIBoard] = useState(selectAIBoard())
  return (
    <>
      {isInitial && (
        <InitialPage
          setIsInitial={setIsInitial}
          setIsPreparing={setIsPreparing}
        />
      )}
      {isPreparing && (
        <PreparingGame
          board={humanBoard}
          setBoard={setHumanBoard}
          setAIBoard={setAIBoard}
          setIsPreparing={setIsPreparing}
          setIsMainGame={setIsMainGame}
          headerMessage={headerMessage}
          setHeaderMessage={setHeaderMessage}
        />
      )}
      {isMainGame && (
        <MainGame
          humanBoard={humanBoard}
          setHumanBoard={setHumanBoard}
          AIBoard={AIBoard}
          setAIBoard={setAIBoard}
          setIsPreparing={setIsPreparing}
          setIsMainGame={setIsMainGame}
          headerMessage={headerMessage}
          setHeaderMessage={setHeaderMessage}
        />
      )}
    </>
  )
}

export default App
