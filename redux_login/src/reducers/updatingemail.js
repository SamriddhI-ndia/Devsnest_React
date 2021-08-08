const Updatingemail = (state=" ",action) => {
    if(action.type==="updateEmail"){
        return action.email;
    }
    return state;
}
export default Updatingemail;