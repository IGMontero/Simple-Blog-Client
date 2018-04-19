import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//action
import { createPost } from '../actions/index';

//Functions
import { validatePost } from '../utils/validation/index';
import { renderFieldInput , renderFieldTextArea , renderFieldSelect } from '../utils/fields/renderField'
import PostOptionsNav  from '../components/post_options_nav';
import PostForm from '../components/post_form';
import PostPreview from '../components/post_preview';

  class PageNewPost extends Component{

    constructor(props){
      super(props);

      this.state = {
        view:false
      }

    }


    onSubmit(values){
      this.props.createPost(values , () =>{
        this.props.history.push('/posts');
      });
    }


    //Changes the view depending on the last clicked button.
    //Value 0 means 'editor' , value 1 means 'preview'.
    changeView(value){
      value ? this.setState({view:true}) : this.setState({view:false});
    }

    render(){

      const { handleSubmit } = this.props;

      const formState = this.props.formState.PostsNewForm;



      return(
      <div className="container post-form-container">
        <div className="form-top-container">
          <Link to = {`/posts/`} className="btn btn-danger custom-button back-button"><i className="fas fa-arrow-left"></i> Back</Link>
        </div>
        <PostOptionsNav view={this.state.view} changeView = { this.changeView.bind(this) } />
        {!this.state.view ? (
          <PostForm onSubmit = {handleSubmit(this.onSubmit.bind(this))} />
        ) : (
        <PostPreview values={formState.values} />
        ) }
      </div>
      )
    }
  }


  function mapStateToProps( {form} ){
    return { formState : form }
  }


  export default connect(mapStateToProps, {createPost} )(
    reduxForm({
      form:'PostsNewForm',
      validatePost
    })(PageNewPost)
  );
