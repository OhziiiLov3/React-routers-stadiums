// Courts 
// Lockerroom 
// Basketball
// Player 
// Conession 
// Fans 
// Sponsors 
// Mascot 
// Press 
// Ticket Counters 
// Secrurity 
import  {useState, useEffect} from 'react';

import Court from './Court';

const Stadium = () => {
    // State will go here
    const[players, setPlayers] = useState([
        {name: 'Devman Curry', position: 'PG', number: 30},
        {name: 'Ohziii Lov3', position: 'SG', number: 9},
        {name: 'ja Morant', position: 'PG', number: 5},
        {name: 'Lamar Jackson', position: 'SG', number: 8},
        {name: 'Joel Embid', position: 'C', number: 3},
       
    ]);


  return (
    <div>
        <Court players={players} setPlayers={setPlayers} />
    </div>
  )
}

export default Stadium
