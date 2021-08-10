const UpdateTodo = (state=[],action) => {
    if(action.type==="Add_item"){
        return [...state,action.payload];
    }
    else if(action.type==="Remove_item"){
        return state.filter((item,index)=>index!==action.payload);
    }
    return state;
}
 
export default UpdateTodo;