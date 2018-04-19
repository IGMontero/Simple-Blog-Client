import { AUTHENTICATION_ERROR } from '../actions/types';

export default function( state = {} , action){
  switch(action.type){
    case AUTHENTICATION_ERROR:
    const { message } = action.payload;
    return message;
    default : return state;
  }
}
