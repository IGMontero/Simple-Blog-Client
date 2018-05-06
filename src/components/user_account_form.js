import React , {Component} from 'react';
import { reduxForm , Field } from 'redux-form';
import { connect } from 'react-redux';
//Actions
import { editUser } from '../actions/index';

//Components
import { renderFieldInput } from '../utils/fields/renderField';

class UserAccountForm extends Component{

  onSubmit(values){
    const id  = this.props.userId;
    this.props.editUser(id , values , ()=>{
      this.props.history.push(`/users/${id}`);
    });
  }

  render(){

    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="email"
          type="email"
          label="Email"
          component={renderFieldInput}
          />
        <button className="btn btn-success custom-button">Submit</button>
      </form>
    )
  }
}


function mapStateToProps({ form }){
  return{
    formState : form
  }
}

export default connect(mapStateToProps , { editUser })(
  reduxForm({
    form : 'UserAccountForm'
  })(UserAccountForm)
)
