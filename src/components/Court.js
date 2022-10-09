import React from 'react'
import Player from './Player';

const Court = (props) => {

    const playersList = props.players.map((player,idx)=> {
        return <Player key={idx} name={player.name} position={player.position} number={player.number}/>
    })

function benchLastPlayer(){
    let benchPlayer = [...props.players];
    // remove the last player
    benchPlayer.pop();
    props.setPlayers(benchPlayer);
}

function addPlayer(e){
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let number = document.querySelector('#number').value;
    let position = document.querySelector('#position').value;
    //create a new player 
    const newPlayer = {
        name:name,
        number: number,
        position: position
    }
    // add player to list of players
    let createPlayer = [...props.players];
    createPlayer.push(newPlayer);
    props.setPlayers(createPlayer);
}


  return (
    <div>
      <h1>Court</h1>
      <form onSubmit={addPlayer}>
        <input type="text" name="name" placeholder="Name" id="name" />
        <input
          type="text"
          name="position"
          placeholder="Posititon"
          id="position"
        />
        <input type="text" name="number" placeholder="Number" id="number" />
        <button type="submit">Add Player</button>
      </form>
      {playersList}
      <button onClick={benchLastPlayer}>Bench Last Player</button>
    </div>
  );
}

export default Court