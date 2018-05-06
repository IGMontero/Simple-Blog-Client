import React from 'react';

import ReactLoading from 'react-loading';


export default function( {type,color}){
  return(
    <div className="loading-screen">
      <ReactLoading className="react-loading" type={type} color={color} />
      <h3 className="mt-2">Loading...</h3>
    </div>
  )
}
