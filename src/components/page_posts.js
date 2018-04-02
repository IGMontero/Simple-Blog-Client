import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom'

import PostMiniature from './post_miniature';

class PagePosts extends Component{

  componentDidMount(){
    this.props.fetchPosts();
  }


  renderPosts(){

    const posts = this.props.posts;

    if(posts){

    return _.map( posts , post => {
      return(
        <PostMiniature
        key= {post._id}
        post = {post}
        />
      )
    });

  }
  }

  render(){

    if(!this.props.posts){
      return(
        <div>Loading...</div>
      )
    }

    return(
      <div className = "container posts-container">
      <Link to = "/posts/new" className = "btn btn-warning create-post-button">
      <i className="fas fa-plus-square mr-3"></i>Create a new Post</Link>
        <div className = "row">
            {this.renderPosts()}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state){
  return {posts : state.posts}
}

export default connect(mapStateToProps,{ fetchPosts })(PagePosts);
