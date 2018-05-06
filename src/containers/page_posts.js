import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom'

//Components
import LoadingScreen from '../components/loading_screen';
import PostMiniature from '../components/post_miniature';

class PagePosts extends Component{

  constructor(props){
    super(props);

    this.state = {
      showPosts : false
    }

    this.showPosts = this.showPosts.bind(this);
    this.hidePosts = this.hidePosts.bind(this);
  }


  componentWillUnmount(){
    this.hidePosts();
  }

  componentWillMount(){
    this.props.fetchPosts(this.showPosts);
  }

  showPosts(){
    this.setState({showPosts:true});
  }

  hidePosts(){
    this.setState({showPosts:false});
  }

  renderPosts(){

    const posts = this.props.posts;

    if(posts){

    return _.map( posts , post => {
      return(
        <PostMiniature
        key= {post._id}
        author = {post.author}
        post = {post}
        />
      )
    });

  }
  }

  render(){

    const { authenticatedUser } = this.props;
    const { showPosts } = this.state;

    if(!this.props.posts||!showPosts){
      return(
        <LoadingScreen type='spinningBubbles' color='black' />
      )
    }


    //Show the create post window only if the user is authenticated.
    var createPostClassName = "btn btn-warning create-post-button";
    if(_.isEmpty(authenticatedUser._id)){
      createPostClassName += " invisible";
    }

    return(
      <div className = "container posts-container">
      <Link to = "/posts/new" className = {createPostClassName} >
      <i className="fas fa-plus-square mr-3"></i>Create a new Post</Link>
        <div className = "row">
            {this.renderPosts()}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({posts , authenticatedUser}){
  return {
    posts : posts,
    authenticatedUser
  }
}

export default connect(mapStateToProps,{ fetchPosts })(PagePosts);
