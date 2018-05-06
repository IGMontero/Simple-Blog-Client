import React,{Component} from 'react';
import { Field, reduxForm , change } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
//actions
import { fetchPost , editPost } from '../actions/index';

//Components
import { validatePost } from '../utils/validation/index';
import { renderFieldInput , renderFieldTextArea , renderFieldSelect } from '../utils/fields/renderField';
import PostOptionsNav from '../components/post_options_nav';
import PostForm from '../components/post_form';
import PostPreview from '../components/post_preview';
import LoadingScreen from '../components/loading_screen';



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
    this.props.editPost(id , values , ()=>{
      this.props.history.push(`/posts/${id}`);
    });

  }

  componentWillMount(){
    const { authenticatedUser } = this.props;
    //Redirect the user to the login page if he is not authenticated.
    if(_.isEmpty(authenticatedUser)){
      this.props.history.push('/login');
    }
  }

  componentWillReceiveProps(newProps){
    const { post , authenticatedUser } = newProps;
    //Check if the authenticated user is the post owner.
    //If he isn't ,redirect to /posts.
    if(post && !_.isEqual(authenticatedUser._id, post.author)){
        this.props.history.push('/posts');
      }

  }

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render(){

    const post = this.props.post;
    const { handleSubmit ,authenticatedUser } = this.props;
    const formState = this.props.formState.PostsEditForm;

    if(!post)
      return(
        <LoadingScreen type='spinningBubbles' color='black' />
      )



    return(
      <div className="container post-form-container">
        <div className="form-top-container">
          <Link to = {`/posts/${this.props.match.params.id}`} className="btn btn-danger custom-button back-button"><i className="fas fa-arrow-left"></i> Back</Link>
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

function mapStateToProps( { posts , form , authenticatedUser} , ownProps ){
  const post = posts[ownProps.match.params.id];
  return {
    post : posts[ownProps.match.params.id],
    initialValues : posts[ownProps.match.params.id],
    formState : form,
    authenticatedUser
    }
}




export default connect(mapStateToProps, {fetchPost , editPost} )(
  reduxForm({
    form:'PostsEditForm',
    validatePost
  })(PageEditPost)
)
