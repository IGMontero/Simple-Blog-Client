import { FETCH_USER } from '../actions/types';

export default function(state = {} , action){
  switch(action.type){
    //Fetch user data and save it under its _id as key.
    case FETCH_USER :
    return {...state , [action.payload.data._id] : action.payload.data};
    default : return state;
  }
}
