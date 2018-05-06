import React from 'react';
import { Link } from 'react-router-dom'
import _ from 'lodash';
export default function( { post:{title,subtitle,content,image,_id ,generalTopic } , author} ){


  if(!image)
    image = 'https://www.socioesquadrao.com.br/wp-content/themes/socioesquadrao/img/parceiros/default.png';

  return(

      <div className="col-4 post-miniature">
        <div className = "miniature-sub-container">
          <Link to = {`/posts/${_id}`}>
            <div className = "miniature-image-container" >
              <img src={image} />
              <img className="miniature-profile-picture" src={author&&author.profileImage ? author.profileImage : 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'} />
              <Link to={ author ? `/users/${author._id}` : '/'} className="miniature-author-name">{!_.isEmpty(author) ?  `${author.firstName} ${author.lastName}` : ''}</Link>
                <div className= "miniature-image-overlay" >
                  <button className="btn btn-default">Read More</button>
                </div>
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
