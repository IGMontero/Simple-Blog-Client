import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost , deletePost } from '../actions/index';

class PageShowPost extends Component{

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  onDeleteClick(){
    const id = this.props.match.params.id;
    this.props.deletePost(id , () =>{
      //simulate delay
      setTimeout( ()=>{this.props.history.push('/posts')} , 500);

    })
  }

  render(){

    const post = this.props.post;

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

    const d = new Date(post.createdAt);
    const postDate = `${addZero(d.getMonth())} / ${addZero(d.getDate())} / ${addZero(d.getFullYear())}`;

    return(

      <div className="container show-page-container">
        <Link to = "/posts" className="btn btn-danger custom-button back-show-button"><i className="fas fa-arrow-left"></i> Back</Link><br/>
        <span className="post-topic">{post.generalTopic}</span><br/>
        <span className = "post-date">{postDate}</span>
        <h1 className= "mb-3 show-page-title" >{post.title}</h1>
        <h4 className="mb-3 show-page-subtitle">{post.subtitle}</h4>
        <img src = {post.image} className="show-page-image" />
        <p className="show-page-content">{post.content}</p>

        <div className = "collapse-container">
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
                <Link to = {`/posts/${this.props.match.params.id}/edit`} className="btn btn-info custom-button"><i className="fas fa-edit"></i> Edit Post</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps( { posts } , ownProps){
  return {post : posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost , deletePost })(PageShowPost);
