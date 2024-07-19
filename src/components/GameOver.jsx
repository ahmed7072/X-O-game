
import React from 'react'

export default function GameOver({winner , restart}) {
    return (
        <div id='game-over'>
            <h2>Game's Over</h2>
            {winner && <p>You won {winner}</p>}
            {!winner && <p>it's a draw</p>}
            <button onClick={restart}>start over</button>
        </div>
    )
}
