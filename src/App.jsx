import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning"
import GameOver from "./components/GameOver"

const Board = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]


function App() {
  const [gameTurn , setGameTurn] = useState([]) 
  const [names ,setNames] = useState({
    "x":"player 1",
    "o":"player 2"
  })
  let activePlayer = getActivePlayer(gameTurn)
  
  let winner 

  function getActivePlayer(gameTurn){
    let currentPlayer = "x";
    if(gameTurn.length>0 && gameTurn[0].player==="x"){
      currentPlayer = "o"
    }    
    return currentPlayer
  }
  
  let gameBoard = [...Board.map((item)=>[...item])]
  
  function selectActivePlayer(rowIndex , colIndex){
    setGameTurn((prevTurn)=>{
      let currentPlayer = getActivePlayer(prevTurn)
      const updatedTurn = [{square:{row:rowIndex , col:colIndex}, player:currentPlayer},...prevTurn]
      return updatedTurn
    })
  }

  function restartGame(){
    setGameTurn([])
  }

  // here we update the board after each selection
  for( const turn of gameTurn){
    const { square , player} = turn
    const {row , col} = square
    gameBoard[row][col]=player;
  }

  for (const combination of WINNING_COMBINATIONS){
    let firstSymbol = gameBoard[combination[0].row][combination[0].column]
    let secondSymbol = gameBoard[combination[1].row][combination[1].column]
    let thirdSymbol = gameBoard[combination[2].row][combination[2].column]

    // we check if first symbol is bull if it's we break the loop cuz no moves been selected yet
    if(firstSymbol && firstSymbol == secondSymbol && firstSymbol == thirdSymbol ){
      winner = names[firstSymbol]
    
    }
  }

  const itsDraw = gameTurn.length === 9 && !winner

  function handlePlayerName(newName , symbol){
    setNames(names=>{
      return {...names,
      [symbol]:newName}
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="x" handleNameChange={handlePlayerName} isActive={activePlayer==="x"}/>
          <Player initialName="Player 2" symbol="o" handleNameChange={handlePlayerName} isActive={activePlayer==="o"}/>
        </ol>
        {(winner || itsDraw) && <GameOver restart={restartGame} winner={winner}/>}
        <GameBoard selectTurn={selectActivePlayer} gameBoard={gameBoard}/>
      </div>
      <Log turns={gameTurn}/>
    </main>
  )
}

export default App
