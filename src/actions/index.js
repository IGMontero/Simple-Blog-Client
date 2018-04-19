import { FETCH_POSTS , FETCH_POST , CREATE_POST
   , DELETE_POST , EDIT_POST , REGISTER_USER
   , LOGIN_USER , LOGOUT_USER  , FETCH_USER,
   AUTHENTICATION_ERROR } from './types';
import axios from 'axios';

const REDIRECT_DELAY = 400;

export function fetchUser(id){

  return(dispatch) => {
    axios.get(`/users/${id}`)
    .then( (response) =>{
      dispatch({
        type:FETCH_USER,
        payload:response
      })
    })
    .catch( (err) =>{
      console.log(err);
    });
  }

}

export function logOutUser(callback){

  return(dispatch) => {
    axios.post('/logout')
    .then( (response) =>{
      callback();
      dispatch({
        type:LOGOUT_USER,
        payload:response
      });
    });
  }

}

export function logInUser( values, showAlert , callback ){
  //Async function to get payload data
  return (dispatch) => {
    axios.post('/login' , values)
   .then( (response) =>
    {
      //Emulate a server delay
     //setTimeout( () => callback(),REDIRECT_DELAY);
     callback();
     dispatch({
       type:LOGIN_USER,
       payload:response.data
     })
    }
 ).catch( (err) => {
   //Handle authentication errors
   if(err.response.status==409){
     //Show alert message
     showAlert();
     dispatch({
       type:AUTHENTICATION_ERROR,
       payload:err.response.data
     });
   }
 });
}
}

export function registerUser(values, showAlert ,callback){

  return (dispatch)=>{
    axios.post('/register', values)
    .then( (response) => {
      //setTimeout( () => callback(),REDIRECT_DELAY);
      callback();
      dispatch({
      type:REGISTER_USER,
      payload:response.data
    });
  })
  .catch( (err) =>{
    if(err.response.status==409){
      //Show alert message
      showAlert();
      dispatch({
        type:AUTHENTICATION_ERROR,
        payload:err.response.data
      });
    }
  });
  }
}

export function fetchPosts(){
  return (dispatch) =>{
    axios.get('/posts')
    .then( (response) => dispatch({
      type:FETCH_POSTS,
      payload:response
    }))
  }
}

export function fetchPost(id){
  return (dispatch) => {
    axios.get(`/posts/${id}`)
    .then( (response) => dispatch({
      type:FETCH_POST,
      payload:response
    }))
  }
}

export function deletePost(id , callback){
  return (dispatch) => {
    //setTimeout( () => callback(),REDIRECT_DELAY);
    axios.delete(`/posts/${id}`)
    .then( (response) => {
      callback();
      dispatch({
      type:DELETE_POST,
      payload:id
    })
  })
  .catch((err) =>{
    console.log(err);
    const response = err.response;
    if(response.status==401){
      console.log(response.data);
    }else{
      console.log("Unhandled error.");
    }
  })
  }
}

export function editPost(id,values,callback){
  return (dispatch) =>{
    axios.put(`/posts/${id}`,values)
    .then ((response) => {
      //setTimeout( () => callback(),REDIRECT_DELAY);
      callback();
      dispatch({
      type:EDIT_POST,
      payload:id
    })
  })
  .catch((err) =>{
    const response = err.response;
    if(response.status==401){
      console.log(response.data);
    }else{
      console.log("Unhandled error.");
    }
  });
  }
}

export function createPost(values,callback){
  return (dispatch)=>{
    axios.post(`/posts`,values)
    .then((response)=> {
      //setTimeout( () => callback(),REDIRECT_DELAY);
      callback();
      dispatch({
      type:CREATE_POST,
      payload:values
    })
  })
  .catch( (err) => {
    console.log(err);
  });
  }
}
