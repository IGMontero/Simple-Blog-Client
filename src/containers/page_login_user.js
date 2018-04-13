import React , { Component } from 'react';
import { Field , reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import { renderFieldInput } from '../utils/fields/renderField';

//actions
import { logInUser } from '../actions/index';

class PageLoginUser extends Component {


  onSubmit(values){
    this.props.logInUser(values , () => {
      this.props.history.push('/')
    })
  }

  render(){

    const { handleSubmit } = this.props;

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
      </div>
    )
  }
}

export default connect(null, { logInUser })(
  reduxForm({
    form:'UserLoginForm'
  })(PageLoginUser)
);
