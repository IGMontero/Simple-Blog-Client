import React,{Component} from 'react';
import { Field, reduxForm , change } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//actions
import { fetchPost , editPost } from '../actions/index';

//Functions
import validate from '../utils/validation/validatePost';
import { renderFieldInput , renderFieldSelect , renderFieldTextArea } from '../utils/fields/renderField';


class PageEditPost extends Component{



  onSubmit(values){
    const id = this.props.match.params.id;
    this.props.editPost(id , values ,  ()=>{
        this.props.history.push(`/posts/${id}`);
    })
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render(){

    const post = this.props.post;
    const { handleSubmit } = this.props;


    if(!post)
      return(
        <div>Loading...</div>
      )

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
          label="Image URL"
          name = "image"
          type = "text"
          component={renderFieldInput}
          />
          <Field
          label = "Topic"
          name = "generalTopic"
          component = {renderFieldSelect}
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

function mapStateToProps( { posts } , ownProps ){
  const post = posts[ownProps.match.params.id];
  return {
    post : posts[ownProps.match.params.id],
    initialValues : posts[ownProps.match.params.id]
    }
}




export default connect(mapStateToProps, {fetchPost , editPost} )(
  reduxForm({
    form:'PostsEditForm',
    validate
  })(PageEditPost)
)
