import React, { Component} from 'react';


class UserImageInput extends Component{

  constructor(props){
    super(props);
    this.state = {
      uploadedImage : ''
    }
  }

  handleChange(evt){
    const {input: {onChange, onBlur}} = this.props;
    //Read the input file
    var reader = new FileReader();
    const file =  evt.target.files[0];
    //Read the data
    reader.readAsDataURL(file);
    //Save the base64 image code after uploading it
    reader.onloadend = () => {
      this.setState({uploadedImage : reader.result});
      //Update redux form state
      onBlur(reader.result);
      onChange(reader.result);
    }
  }

  render(){

    var { profileImage , input } = this.props;
    const { uploadedImage } = this.state;

    if(uploadedImage){
      profileImage = uploadedImage;
    }

    return(
      <label htmlFor="profile-image-input" className="profile-image-input-label">
        <input onChange={this.handleChange.bind(this)} type="file" id="profile-image-input"
        name={input.name} accept="image/*"
        />
        <img className="profile-image" src = {profileImage} />
        <div className="profile-image-input-overlay">
          <span>Upload an image <i className="fas fa-camera"></i></span>
        </div>
      </label>
    )
  }

}

export default UserImageInput;
