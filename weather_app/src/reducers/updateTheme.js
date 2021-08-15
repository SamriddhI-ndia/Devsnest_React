const UpdateTheme = (state=true,action) => {
    console.log(state);
    if(action.type==="UpdateTheme")
         return !state;
    return state;
}
 
export default UpdateTheme;