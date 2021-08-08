const Updatinguser = (state=" ",action) => {
    if(action.type==="updateUsername"){
        return action.name;
    }
    return state;
}

 
export default Updatinguser;