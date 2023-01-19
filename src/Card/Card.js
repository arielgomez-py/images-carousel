import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.src}/>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
