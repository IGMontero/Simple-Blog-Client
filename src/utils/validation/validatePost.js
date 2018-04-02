export default function validate(values){
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
