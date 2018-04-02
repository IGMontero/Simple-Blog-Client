import React, {Component} from 'react';
import { connect } from 'react-redux';

class EntryHeader extends Component{



  render(){

    const {path , params : {id} , isExact} = this.props.match;

    //hardcode ftw

    var title,subtitle;
    const post = this.props.post;

    //Provisional, deberia controlarlo desde el state.
    switch(path){
      case '/':
      title = 'Welcome to SimpleBlog!';
      subtitle = "Search for an interesting post or share your knowledge and experiences by creating your own !"
      break;
      case '/posts':
      title = "Posts List";
      subtitle = "Have fun !";
      break;
      case '/posts/new':
      title = "Create a New Post";
      subtitle = "Share us your thoughts!";
      break;
      case '/posts/:id':
        title = post ? post.generalTopic : '';
      break;
      case '/posts/:id/edit':
        title = "Edit post";
      break;
    }



    return(
      <header className="entry-header">
        <div className="container">
          <h1 className="entry-header-title">{title}</h1>
          <h5 className="entry-header-subtitle">{subtitle}</h5>
        </div>
      </header>
    )
  }
}

function mapStateToProps( { posts } , ownState){
  return { post: posts[ownState.match.params.id] }
}


export default connect(mapStateToProps)(EntryHeader);
