import React from 'react'
import Player from './Player';

const Court = (props) => {

    const playersList = props.players.map((player,idx)=> {
        return <Player key={idx} name={player.name} position={player.position} number={player.number}/>
        
    })

  return (
    <div>
      <h1>Court</h1>
      {playersList}
    </div>
  );
}

export default Court