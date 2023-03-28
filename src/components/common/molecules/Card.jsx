import React from 'react';

const Card = ({ title, text }) => 
  <article className='card'>
    <h3>{title}</h3>
    <p>{text}</p>
  </article>

export default Card;
