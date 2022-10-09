import React from 'react'

const Player = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.position}</p>
      <p>{props.number}</p>
    </div>
  );
}

export default Player