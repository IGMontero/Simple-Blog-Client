import React from 'react';
import { Link } from 'react-router-dom';


import TopPostsList from './top_posts_list'


export default function(props){


  return(
    <div className="container page-index">
          <Link  to="/posts" className = "btn btn-success page-index-start-button" > Get Started </Link>
    </div>
  )
}
