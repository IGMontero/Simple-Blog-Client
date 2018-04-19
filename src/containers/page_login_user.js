import React , { Component } from 'react';
import { Field , reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

//Functions
import { validateUser } from '../utils/validation/index';

//Components
import { renderFieldInput } from '../utils/fields/renderField';

//actions
import { logInUser } from '../actions/index';

class PageLoginUser extends Component {

  constructor(props){
    super(props);

    this.state = {
      errorMessage : '',
      show:false
    }

  }

  componentWillReceiveProps(newProps){
     const { errorMessage } = newProps;
     if(!_.isEmpty(errorMessage)){
     this.setState({errorMessage});
   }
  }

  showAlert(){
    this.setState({show:true});
  }

  onSubmit(values){
    this.props.logInUser(values , this.showAlert.bind(this) ,  () => {
      this.props.history.push('/');
    });
  }


  render(){

    const { handleSubmit } = this.props;


    var alertClassName = "alert alert-danger";

    if(!this.state.show){
      alertClassName += " invisible";
    }

    return(
      <div className="container user-form-container">
      <Link to="/" className="btn btn-danger custom-button"><i className="fas fa-arrow-left"></i> Back</Link>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field
          label="E-mail"
          name="email"
          type="email"
          component={renderFieldInput}
          />
          <Field
          label="Password"
          name="password"
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
    );
  }
}

function mapStateToProps( { errorMessage } ){
  return {
    errorMessage
  }
}

export default connect(mapStateToProps, { logInUser })(
  reduxForm({
    form:'UserLoginForm',
    validate: validateUser,
  })(PageLoginUser)
);
