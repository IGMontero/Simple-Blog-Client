import React,{Component} from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

//Components
import { renderFieldInput , renderFieldTextArea , renderFieldSelect } from '../utils/fields/renderField';


export default class PostForm extends Component{

  render(){

  const { onSubmit } = this.props;
  return(
    <form className = "post-form" onSubmit={onSubmit}>
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
      label = "Topic"
      name = "generalTopic"
      component = {renderFieldSelect}
      />
      <Field
      label="Image URL"
      name = "image"
      type = "text"
      component={renderFieldInput}
      />
      <div className="mt-5">
        <button type="submit" className="btn btn-success custom-button">Submit</button>
      </div>
    </form>
  )
}


}
