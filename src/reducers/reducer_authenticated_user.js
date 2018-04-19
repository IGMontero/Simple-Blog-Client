import { LOGIN_USER , REGISTER_USER , LOGOUT_USER } from '../actions/types';

//Handle all the data for the client / authenticated user.

export default function(state={} , action){
  switch(action.type){
    //Return the fetched data as the auth user.
    case LOGIN_USER:
    return action.payload;
    //Clear the client-side data about the auth user.
    case LOGOUT_USER:
    return {};
    default : return state;
  }
}
