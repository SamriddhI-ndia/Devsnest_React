import {combineReducers} from 'redux'
import UpdateTodo from './updateTodo'

const rootReducer=combineReducers({
    update:UpdateTodo,
})
export default rootReducer;