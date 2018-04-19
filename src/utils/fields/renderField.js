import React from 'react';


export function renderFieldInput(field){

  //Validate and display possible errors on the input field.
  const { meta : { error , submitFailed}} = field;
  const inputClassName = `form-control ${ submitFailed && error ? 'is-invalid' : ''}`;


  return(
    <div className="form-group">
      <label>{field.label}</label>
      <input
      className={inputClassName}
      type={field.type}
      {...field.input}
       />
       <div className="invalid-feedback">
          {submitFailed ? error : ''}
       </div>
    </div>
  )
}

export function renderFieldTextArea(field){


  const { meta : { error , submitFailed} } = field;
  const inputClassName = `form-control content-field ${ submitFailed && error ? 'is-invalid' : ''}`;

  return(
    <div className="form-group">
      <label>{field.label}</label>
      <textarea
      className = {inputClassName}
      {...field.input}
      />
      <div className= "invalid-feedback">
        {submitFailed ? error : ''}
      </div>
    </div>
  )
}

export function renderFieldSelect(field){

  const { meta: { error , submitFailed }} = field;
  const inputClassName = `custom-select ${ submitFailed && error ? 'is-invalid' : '' }`;



  return(
    <div>
      <select {...field.input} className = {inputClassName} >
        <option value = "0" >Select a topic...</option>
        <option value = "Tecnology" >Tecnology</option>
        <option value = "Sports" >Sports</option>
        <option value = "Videogames" >Videogames</option>
        <option value = "Future Society">Future Society</option>
        <option value = "Nature">Nature</option>
      </select>
      <div className = "invalid-feedback">
        {submitFailed ? error : ''}
      </div>
    </div>
  )
}
