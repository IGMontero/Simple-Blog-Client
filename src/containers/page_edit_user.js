import React , { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
//Actions
import { fetchUser } from '../actions/index';

//Components
import UserPersonalForm from '../components/user_personal_form';
import UserAccountForm from '../components/user_account_form';
import LoadingScreen from '../components/loading_screen';

class PageEditUser extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedOption : 0
    }
  }

  componentWillMount(){
    const { authenticatedUser } = this.props;
    const id = this.props.match.params.id;
    this.props.fetchUser(id);

    //Check if there is an authenticated user and he
    // is the account owner.

    if(!_.isEqual(authenticatedUser._id , id)){
      this.props.history.push(`/users/${id}`);
    }
  }

  selectOption(value){
    const { selectedOption } = this.state;

    if(!selectedOption && value){
      this.setState({selectedOption : 1});
    }else if(selectedOption && !value){
      this.setState({selectedOption : 0});
    }

  }

  render(){

    const { user } = this.props;
    const { selectedOption } = this.state;

    //Set className depending on the components state
    var option0ClassName =  'col-6 card text-center settings-option ';
    var option1ClassName = option0ClassName;

    if(selectedOption==0){
      option0ClassName += ' settings-option-selected';
    }else{
      option1ClassName += ' settings-option-selected';
    }


    if(!user){
      return(
        <LoadingScreen type='spinningBubbles' color='black' />
      )
    }

    return(
      <div className="container page-edit-user-container">
      <div className = "page-top-container">
        <Link to={`/users/${user._id}`} className="btn btn-danger custom-button back-button"><i className="fas fa-arrow-left"></i> Back</Link><br/>
      </div>
        <div className="row">
          <div onClick={()=> this.selectOption(0) } className={option0ClassName}>
            <h2>Profile Information</h2>
          </div>
          <div onClick={() => this.selectOption(1) } className={option1ClassName}>
            <h2>Account information</h2>
          </div>
        </div>
        <div className = "page-edit-user-form-container card ">
          { !selectedOption ? (
            <UserPersonalForm initialValues={user} history={this.props.history} userId={user._id} />
          ) : (
            <UserAccountForm initialValues={user} history={this.props.history} userId= {user._id} />
          ) }
        </div>
      </div>
    );
  }

}


function mapStateToProps( { users , authenticatedUser} ,ownProps ){
  return{
    user: users[ownProps.match.params.id],
    authenticatedUser
  }
}


export default connect(mapStateToProps, { fetchUser } )(PageEditUser);
