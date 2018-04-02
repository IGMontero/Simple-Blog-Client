import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//action
import { createPost } from '../actions/index';

//Functions
import validate from '../utils/validation/validatePost';
import { renderFieldInput , renderFieldTextArea , renderFieldSelect } from '../utils/fields/renderField'


  class PageNewPost extends Component{


    onSubmit(values){
      this.props.createPost(values , () =>{
        this.props.history.push('/posts');
      });
    }

    render(){

      const { handleSubmit } = this.props;

      return(
      <div className="container post-form-container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
          label = "Title"
          name="title"
          type="text"
          component={renderFieldInput}
          />
          <Field
          label="Subtitle"
          name = "subtitle"
          type="text"
          component={renderFieldInput}
          />
          <Field
          label="Content"
          name = "content"
          component={renderFieldTextArea}
          />
          <Field
          label = "Topic"
          name = "generalTopic"
          component = {renderFieldSelect}
          />
          <Field
          label="Image URL"
          name = "image"
          type = "text"
          component={renderFieldInput}
          />
          <div className="mt-5">
            <button type="submit" className="btn btn-success custom-button">Submit</button>
            <Link to = "/posts" className="btn btn-danger ml-2 custom-button">Back</Link>
          </div>
        </form>
      </div>
      )
    }
  }



export default reduxForm({
  form : 'PostsNewForm',
  validate
})(
  connect(null , {createPost} )(PageNewPost)
)
