import {combineReducers} from 'redux';
import UpdateUser from './updateUser';
import UpdatePost from './updatePost';
const rootReducer=combineReducers({
    user:UpdateUser,
    url:UpdatePost
})
export default rootReducer;