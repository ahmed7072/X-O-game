import React, { useState } from 'react'

export default function Player({initialName , symbol , isActive , handleNameChange}) {
    const [name , setName] = useState(initialName)
    const [Editited ,setEdit]=useState(false)
    
    function handleClick(){
        setEdit((editt)=>!editt)
        if(Editited){
            handleNameChange(name ,symbol)
        }
    }
    function handleName(event){
        setName(event.target.value)
    }
    return (
        <li className={`player ${isActive?"active":""}`}>
            {Editited?<input type="text" value={name} onChange={handleName}/>:<span className='player-name'>{name}</span>}
            <span className='player-symbol'>{symbol}</span>
            <button onClick={handleClick}>{Editited?"save":"edit"}</button>
        </li>
    )
}
