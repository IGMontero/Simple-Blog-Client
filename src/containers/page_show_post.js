import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost , deletePost } from '../actions/index';
import marked from 'marked';
import _ from "lodash";

class PageShowPost extends Component{

  componentWillMount(){
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }


  onDeleteClick(){
    const id = this.props.match.params.id;
    this.props.deletePost(id , () =>{
        this.props.history.push('/posts');
    });
  }

  checkAuthor(){
    this.props.history.push("/posts");
  }

  render(){

    const { post, authenticatedUser } = this.props;

    if(!post){
      return (
        <div>Loading..</div>
      )
    }

    function addZero(string){
      string = string.toString();
      if(string.length<2)
        string = '0'+string;
      return string;
    }

    //Adding 1 to the month because it shows 1 less , no idea why.
    const d = new Date(post.createdAt);
    const postDate = `${addZero(d.getMonth()+1)} / ${addZero(d.getDate())} / ${addZero(d.getFullYear())}`;

    //Edit route setting:
    // If the user owner is on the page, show the options container,
    //otherwise hide it.
    var collapseClassName = "collapse-container invisible";
    if(!_.isEmpty(authenticatedUser._id) && _.isEqual(authenticatedUser._id, post.author)){
      collapseClassName = " collapse-container";
    }



    return(

      <div className="container show-page-container">
        <div className = "show-page-top-container">
          <Link to={"/posts"} className="btn btn-danger custom-button back-button"><i className="fas fa-arrow-left"></i> Back to Posts</Link><br/>
        </div>
        <span className="post-topic">{post.generalTopic}</span><br/>
        <span className = "post-date">{postDate}</span>
        <h1 className= "mb-3 show-page-title" >{post.title}</h1>
        <h4 className="mb-3 show-page-subtitle">{post.subtitle}</h4>
        <img src = {post.image} className="show-page-image" />
        <p className="show-page-content" dangerouslySetInnerHTML={ {__html:marked(post.content)} } ></p>
        {/* Collapse start */}
        <div className = {collapseClassName}>
          <a className="btn btn-warning collapse-option-buttons expand-options-button" data-toggle="collapse" href="#buttons-collapse" role="button" aria-expanded="false" aria-controls="buttons-collapse">
          <i className="fas fa-cog"></i> Options
          </a>
          <div className = "collapse" id = "buttons-collapse">
            <div id= "option-buttons-container" className = "option-buttons-container card card-body">
            <ul>
              <li>
                <a className="btn btn-danger custom-button mt-lg-3 mb-lg-3" onClick={this.onDeleteClick.bind(this)}  ><i className="fas fa-trash-alt"></i> Delete Post</a>
              </li>
              <li>
                <Link to = {`/posts/${this.props.match.params.id}/edit`} onClick={ () => this.checkAuthor.bind(this)} className="btn btn-info custom-button"><i className="fas fa-edit"></i> Edit Post</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
        { /* Collapse end */}
      </div>
    )
  }
}


function mapStateToProps( { posts , authenticatedUser } , ownProps){
  return {
    post : posts[ownProps.match.params.id],
    authenticatedUser
  };
}

export default connect(mapStateToProps, { fetchPost , deletePost })(PageShowPost);
