import React , { Component } from 'react';
import marked from 'marked';

export default class PostPreview extends Component{

  render(){

    const { values } = this.props;

    if(!values){
      return(
        <div>Loading..</div>
      )
    }

    const title = values.title ? values.title : '{No title}';
    const subtitle = values.subtitle ? values.subtitle : '{No subtitle}';
    const image = values.image ? values.image : 'https://vanitybranded.net/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-default-large.jpg';
    const content = values.content ? values.content : '<p>{No content}</p>';


    return(
      <div className = "post-preview-container">
        <h1 className= "mb-3 show-page-title">{title}</h1>
        <h4 className="mb-3 show-page-subtitle">{subtitle}</h4>
        <img src = {image} className="show-page-image" />
        <p className="post-preview-content" dangerouslySetInnerHTML={ {__html:marked(content)} }></p>
      </div>
    )
  }

}
