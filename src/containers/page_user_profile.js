import React , { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

//Components
import UserCard from '../components/user_card';
import PostMiniature from '../components/post_miniature';
import LoadingScreen from '../components/loading_screen';
//Action creators
import { fetchUser } from '../actions/index';

class PageUserProfile extends Component{

  constructor(props){
    super(props);

    this.state = {
      isDataLoaded : false
    }

    this.dataLoaded = this.dataLoaded.bind(this);
    this.dataNotLoaded = this.dataNotLoaded.bind(this);

  }

  dataLoaded(){
    this.setState({isDataLoaded:true});
  }

  dataNotLoaded(){
    this.setState({isDataLoaded:false});
  }

  componentWillUnmount(){
    this.dataNotLoaded();
  }

  componentWillMount(){
    const id = this.props.match.params.id;
    this.props.fetchUser(id , this.dataLoaded);
  }

  renderPosts(){

    const { user } = this.props;

    if(user && !_.isEmpty(user.posts)){
      return _.map(user.posts , post => {
        return (<PostMiniature
        key = {post._id}
        author = {user}
        post = {post}
        />
      )
    });
  }else if(user && _.isEmpty(user.posts)){
    return(
      <div>
        <h2>{`${user.firstName} ${user.lastName} has not posted anything yet ;(`}</h2>
      </div>
    )
  }

  }

  render(){

    const { user, authenticatedUser } = this.props;
    const { isDataLoaded } = this.state;


    //While the user is not found, display loading page.
    if(!user||!isDataLoaded){
      return(
        <LoadingScreen type='spinningBubbles' color='black' />
      )
    }

    return(
    <div className="container">
      <UserCard
      user = {user}
       />
      <hr/>
      <div className = "profile-show-options">
        <button>Posts</button>
      </div>
      <div className="row">
        {this.renderPosts()}
      </div>
    </div>
    );
  }
}

function mapStateToProps( { users , authenticatedUser } , ownProps ){
  return{
    user : users[ownProps.match.params.id],
    authenticatedUser
  }
}

export default connect(mapStateToProps , { fetchUser } )(PageUserProfile);
