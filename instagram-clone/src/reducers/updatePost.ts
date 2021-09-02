
const UpdatePost = (state={},action:any) => {
    switch(action.type){
        case "UPDATE_POST":
            return action.payload;
        default:
            return state;
    }
}
 
export default UpdatePost;