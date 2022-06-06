import { combineReducers } from 'redux';
import users from './users';
import createUser from './createuser';
import editUser from './edituser';
// import deleteUser from './deleteuser';
import alert from './alert';
import getUser from './getuser';
import createProfile from './createprofile';

const reducer = combineReducers({
  users,
  createUser,
  editUser,
  createProfile,
  // deleteUser,
  getUser,
  alert
});

export default reducer;
