import React , {Component} from 'react';
import { Field , reduxForm } from 'redux-form';
import { renderFieldInput , renderFieldTextArea , renderFieldSelect } from '../utils/fields/renderField';
import { connect } from 'react-redux';
//Components
import UserImageInput from '../components/user_image_input';

//Actions
import { editUser } from '../actions/index';

class UserPersonalForm extends Component{

  onSubmit(values){
    const id = this.props.userId;
    this.props.editUser( id , values , () => {
      this.props.history.push(`/users/${id}`);
    });
  }


  render(){

    var { initialValues : { profileImage } , handleSubmit } = this.props;

  return(
      <form onSubmit= {handleSubmit(this.onSubmit.bind(this))}>
      <div className="container profile-image-input-container">
        <Field
          name="profileImage"
          component={UserImageInput}
          profileImage = {profileImage}
          />
      </div>
      <div className="row">
        <div className="col-6">
          <Field
            label="First Name"
            name="firstName"
            type="text"
            component = {renderFieldInput}
          />
        </div>
        <div className="col-6">
          <Field
            label="Last Name"
            name="lastName"
            type="text"
            component = {renderFieldInput}
          />
        </div>
      </div>
      <Field
        label="Description"
        name="description"
        size="small"
        component = {renderFieldTextArea}
      />

      <div className="form-bottom-container">
        <button type="submit" className="btn btn-success custom-button">Submit</button>
      </div>
      </form>
    )
  }
}

function mapStateToProps( {form} ){
  return({
    formState: form
  })
}

export default connect(mapStateToProps, { editUser } )(
  reduxForm({
    form:'UserPersonalForm',
  })(UserPersonalForm)
)
