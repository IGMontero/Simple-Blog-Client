import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import AuthenticatedUserReducer from './reducer_authenticated_user';
import UsersReducer from './reducer_users';
import ErrorReducer from './reducer_error';


const rootReducer = combineReducers({
  posts : PostsReducer,
  form: formReducer,
  authenticatedUser : AuthenticatedUserReducer,
  users : UsersReducer,
  errorMessage : ErrorReducer
})




export default rootReducer;
