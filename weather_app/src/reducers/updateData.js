const UpdateData = (state="",action) => {
     if(action.type==="UpdateData"){
         console.log(action.payload);
        return action.payload;
    }
    return state;
}
 
export default UpdateData;