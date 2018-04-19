
// Hardcoding all the cases of invalid data.


//Function taken from  https://cs.chromium.org/chromium/src/third_party/WebKit/LayoutTests/fast/forms/resources/ValidityState-typeMismatch-email.js?sq=package:chromium&type=cs
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validateUser(values){

  const errors = {};

  if(!values.firstName){
    errors.firstName = "Enter your first name.";
  }else if(values.firstName.length>15){
    errors.firstName = "First name must be shorter.";
  }

  if(!values.lastName){
    errors.lastName = "Enter your first name.";
  }else if(values.lastName.length>20){
    errors.lastName = "Last name must be shorter.";
  }

  if(!values.username){
    errors.username = "Enter a valid username."
  }else if(values.username.length>25){
    errors.userName = "Username must be shorter.";
  }

  if(!values.email || !validateEmail(values.email)){
    errors.email = "Enter a valid email."
  }else if(values.email.length>40){
    errors.email = "Username must be shorter.";
  }

  if(!values.password){
    errors.password = "Enter a password.";
  }else if(values.password.length>30){
    errors.password = "Password must be shorter.";
  }

  if(!values.passwordConfirm){
    errors.passwordConfirm = "Enter a password.";
  }else if(values.passwordConfirm.length>30){
    errors.passwordConfirm = "Password must be shorter.";
  }

  if(values.password&&values.passwordConfirm&&values.password!=values.passwordConfirm){
    errors.passwordConfirm = errors.password = "Passwords must coincide.";
  }

  return errors;

}


export function validatePost(values){
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title.";
  }else if (values.title.length>80){
    errors.title = "Title must be shorter.";
  }

  if(!values.subtitle){
    errors.subtitle = "Enter a subtitle.";
  }else if(values.subtitle.length>110)
    errors.subtitle = 'Subtitle must be shorter.';


  if(!values.content){
    errors.content = "Enter some content.";
  }

  if(!values.image){
    errors.image = "Enter an image URL.";
  }

  if(values.generalTopic==0){
    errors.generalTopic = "Select a topic.";
  }

  return errors;
}
