import Updatinguser from "./updatinguser";
import Updatingemail from "./updatingemail";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    user:Updatinguser,
    email:Updatingemail,
})
export default rootReducer;