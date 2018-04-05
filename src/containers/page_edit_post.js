import React,{Component} from 'react';
import { Field, reduxForm , change } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//actions
import { fetchPost , editPost } from '../actions/index';

//Functions
import validate from '../utils/validation/validatePost';
import { renderFieldInput , renderFieldTextArea , renderFieldSelect } from '../utils/fields/renderField';
import PostOptionsNav from '../components/post_options_nav';
import PostForm from '../components/post_form';
import PostPreview from '../components/post_preview';

class PageEditPost extends Component{

  constructor(props){
    super(props);

    this.state = {
      view:false
    }

  }

  changeView(value){
    value ? this.setState({view:true}) : this.setState({view:false});
  }


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

    const formState = this.props.formState.PostsEditForm;


    if(!post)
      return(
        <div>Loading...</div>
      )

    return(
      <div className="container post-form-container">
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

function mapStateToProps( { posts , form } , ownProps ){
  const post = posts[ownProps.match.params.id];
  return {
    post : posts[ownProps.match.params.id],
    initialValues : posts[ownProps.match.params.id],
    formState : form
    }
}




export default connect(mapStateToProps, {fetchPost , editPost} )(
  reduxForm({
    form:'PostsEditForm',
    validate
  })(PageEditPost)
)
