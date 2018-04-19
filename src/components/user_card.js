import React from 'react';


export default function( {user} ){

  const { firstName , lastName , posts } = user;

  return(
    <div className="container user-card-main-container">
      <img className="user-card-profile-picture" src = "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" />
      <div className="user-card-info-container">
        <ul className = "user-card-info">
          <li className="user-card-username">
          {`${firstName} ${lastName}`}
          </li>
          <li className="user-card-description">
            This is the user description.
          </li>
          <li className="user-card-interests">
            Mostly interested in : <span>Tecnology</span> and <span>Videogames</span>.
          </li>
          <li className="user-card-country">
            <i className="fas fa-map-marker-alt"></i> Earth, Universe
          </li>
          <li className="user-card-posts">
          <i className="fas fa-file-alt"></i> Posts : {posts.length}
          </li>
          <li>
          <i className="fab fa-angellist"></i> Recieved 0 <strong>props</strong> in total
          </li>
        </ul>
      </div>
      <div className="user-card-buttons">
        <button className="btn btn-outline-dark">Follow</button>
        <button className="btn btn-outline-dark"><i className="fas fa-envelope"></i></button>
      </div>
    </div>
  );
}
