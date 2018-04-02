import React from 'react';
import { Link } from 'react-router-dom'

export default function( { post:{title,subtitle,content,image,_id ,generalTopic} } ){


  if(!image)
    image = 'https://www.socioesquadrao.com.br/wp-content/themes/socioesquadrao/img/parceiros/default.png';

  return(

      <div className="col-4 post-miniature mt-5">
        <div className = "miniature-sub-container">
          <Link to = {`/posts/${_id}`}>
            <div className = "miniature-image-container" >
              <img src={image} />
              <div className= "miniature-image-overlay" ><button className="btn btn-default">Read More</button></div>
              </div>
            <p className = "miniature-title" >{title}</p>
            <p className = "miniature-subtitle" >{subtitle}</p>
          </Link>
        </div>
        <span className = "post-topic">
         {generalTopic}
        </span>
      </div>
  )
}
