const UpdateLocation = (state=[],action) => {
    if(action.type==="UpdateLocation"){
        console.log("aaaya");
      return action.payload; 
    }
    return state;
}
export default UpdateLocation;