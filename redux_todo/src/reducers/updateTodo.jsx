const UpdateTodo = (state=[],action) => {
    if(action.type==="Add_item"){
        return [...state,action.payload];
    }
    else if(action.type==="Remove_item"){
        return state.filter((item,index)=>index!==action.payload);
    }
    else if(action.type==="Check_item"){
        var newState=[...state];
        newState[action.payload].checked=!newState[action.payload].checked;
        return newState;
    }
    return state;
}
 
export default UpdateTodo;