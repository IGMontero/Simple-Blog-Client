import React , {Component} from 'react';
import { Link , withRouter } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';

import { logOutUser } from '../actions/index';

class Navbar extends Component{

  logOutClick(){
    this.props.logOutUser( () => {
      this.props.history.push('/');
    });
  }

  render(){

    const user = this.props.user;
        
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">SimpleBlog</Link>

        <ul className="navbar-nav mr-auto ml-5">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>
        </ul>
          { _.isEmpty(user) ? (
            <ul className="navbar-nav ml-auto mr-2">
              <li className="nav-item"><Link className="nav-link" to="/login">Log In</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto mr-2">
              <li className="nav-item"><a className="nav-link" onClick={this.logOutClick.bind(this)}>Log Out</a></li>
            </ul>
          ) }
      </div>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return{
    user : state.user
  }
}


export default withRouter(connect(mapStateToProps , { logOutUser })(Navbar));
