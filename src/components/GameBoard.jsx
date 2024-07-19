

export default function GameBoard({selectTurn , gameBoard}) {    
    // const [initailBoard , setBoard] = useState(Board)
    // function handleSelect(x ,y){
    //     // setBoard will automatically get the state to update 
    //     setBoard((prevBoard)=>{
    //         let updatedBoard = [...prevBoard.map((innerArr)=>[...innerArr])]
    //         updatedBoard[x][y]=ActiveSymbol
    //         return updatedBoard
    //     })
    //     selectPlayer();
    // }
    return (
        <ol id='game-board'>
            {
                gameBoard.map((row,rowIndex)=><ol key={rowIndex}>
                    {row.map((col,colIndex)=><li key={colIndex}><button disabled={col !== null} onClick={()=>selectTurn(rowIndex,colIndex)}>{col}</button></li>)}
                </ol>)
            }
        </ol>
    )
}
