import React from 'react';
import { Link } from 'react-router-dom';

export default function(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">SimpleBlog</Link>

      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>
      </ul>
    </div>
    </nav>
  )
}
