import React from 'react';

export default function({number}) {
  return(
    <li className = "top-list-item">
      <div className = "top-list-item-number" >{number}</div>
      <div className = "ml-4" >
        <h6 className = "top-list-item-title" >Im a post title!</h6>
        <p className = "top-list-item-description" >By: <a>Ignacio Montero</a> on <a>March 27 , 18</a></p>
      </div>
    </li>
  )
}
