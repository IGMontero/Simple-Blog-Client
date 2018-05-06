import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class UserCard extends Component{

  render(){

  const { firstName , lastName , posts , profileImage , description , _id } = this.props.user;
  const { authenticatedUser } = this.props;

  return(
    <div className="container user-card-main-container">
    <div className="user-card-profile-picture-container">
      <img className="profile-image" src = {profileImage} />
    </div>
      <div className="user-card-info-container">
        <ul className = "user-card-info">
          <li className="user-card-username">
          {`${firstName} ${lastName}`}
          </li>
          <li className="user-card-description">
            {description}
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
      {
        //Show settings button if the user is authenticated and
        // is the account owner
        _.isEqual(authenticatedUser._id , _id) ? (
          <Link to = {`/users/${_id}/edit`} className="btn btn-outline-dark cunstom-button">
          <i className="fas fa-cog"></i> Settings
          </Link>
        ) : (
          <div></div>
        )
      }
      </div>
    </div>
  );
  }
}

function mapStateToProps({authenticatedUser}){
  return{
    authenticatedUser
  }
}

export default connect(mapStateToProps)(UserCard);
