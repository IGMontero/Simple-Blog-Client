import { LOGIN_USER , REGISTER_USER , LOGOUT_USER } from '../actions/types';

export default function(state={} , action){
  switch(action.type){
    case LOGIN_USER:
    const userId = action.payload._id;
    return userId;
    case LOGOUT_USER:
    return {};
    default : return state;
  }
}
