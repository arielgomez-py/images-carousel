import React from 'react'
import cocktail from "../assets/cocktail.jpg";

const Card = (props,cocktail) => {
  return (
    <div className='card'>
      {props.children}
    </div>
  )
}

export default Card
