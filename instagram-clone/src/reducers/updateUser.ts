import {User} from '../actions/index'
 
const initialUser={
    username:"",
    profilepicture:""
}

const UpdateUser = (state:User=initialUser,action:any) => {
    switch(action.type){
        case "UPDATE_USER":
            return action.payload;
        default:
            return state;
    }
}
 
export default UpdateUser;