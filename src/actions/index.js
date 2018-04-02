import { FETCH_POSTS , FETCH_POST , CREATE_POST  , DELETE_POST , EDIT_POST} from './types';
import axios from 'axios';


export function fetchPosts(){

  const request = axios.get('/posts');

  return{
    type:FETCH_POSTS,
    payload: request
  }

}


export function fetchPost(id){

  const request = axios.get(`/posts/${id}`);

  return{
    type:FETCH_POST,
    payload:request
  }
}


export function deletePost(id , callback){

  callback();

   const request = axios.delete(`/posts/${id}`);

    return{
      type:DELETE_POST,
      payload : id
    }

}

export function editPost(id,values,callback){

  const request = axios.put(`/posts/${id}`,values)
    .then(()=>{
      callback();
    })

    return{
      type:EDIT_POST,
      payload:id
    }


}


export function createPost(values,callback){

  const request = axios.post(`/posts`,values)
  .then(()=>{
    callback();
  })

  return{
    type:CREATE_POST,
    payload:request
  }
}
