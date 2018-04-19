import React , { Component } from 'react';
import { Field , reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
//components
import { renderFieldInput } from '../utils/fields/renderField';

//Functions
import  { validateUser } from '../utils/validation/index';

//actions
import { registerUser } from '../actions/index';

class PageRegisterUser extends Component{

  constructor(props){
    super(props);

    this.state = {
      errorMessage : '',
      show : false
    }
  }

  //Toggle the alert
  showAlert(){
    this.setState({show:true});
  }

  onSubmit(values){
    this.props.registerUser(values , this.showAlert.bind(this) , () => {
        this.props.history.push('/');
    });
  }

  componentWillReceiveProps(newProps){
     const { errorMessage } = newProps;
     console.log(newProps);
     if(!_.isEmpty(errorMessage)){
     this.setState({errorMessage});
   }
  }


  render(){

    const { handleSubmit } = this.props;

    var alertClassName = "alert alert-danger";
    if(!this.state.show){
      alertClassName += " invisible";
    }

    return(
      <div className = "container user-form-container">
      <Link to="/" className="btn btn-danger custom-button"><i className="fas fa-arrow-left"></i> Back</Link>
        <form onSubmit = {handleSubmit(this.onSubmit.bind(this))} >
        <div className="row">
          <div className="col">
            <Field
            label = "First Name"
            name="firstName"
            type="text"
            component={renderFieldInput}
            />
          </div>
          <div className="col">
          <Field
          label="Last Name"
          name="lastName"
          type="text"
          component={renderFieldInput}
          />
          </div>
        </div>
          <Field
          label="E-mail"
          name="email"
          type="email"
          component={renderFieldInput}
          />
          <Field
          label = "Username"
          name="username"
          type="text"
          component={renderFieldInput}
          />
          <Field
          label="Password"
          name="password"
          type="password"
          component={renderFieldInput}
          />
          <Field label="Confirm password"
          name = "passwordConfirm"
          type="password"
          component={renderFieldInput}
          />
        <div className = "form-bottom-container">
          <button type="submit" className="btn btn-success custom-button">Submit</button>
        </div>
        </form>
        <div className={alertClassName} role="alert">
          {this.state.errorMessage}
        </div>
      </div>
    )
  }
}


function mapStateToProps({errorMessage}){
  return{
    errorMessage
  }
}


export default connect(mapStateToProps, { registerUser } )(
  reduxForm({
    form:'UserRegisterForm',
    validate: validateUser
  })(PageRegisterUser)
);
