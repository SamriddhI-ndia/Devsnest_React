const updateUsername = (x) => {
    return {
        type:"updateUsername",
        name:x,
    };
}
const updateEmail = (x) => {
    return {
        type:"updateEmail",
        email:x,
    };
}
 
export {updateUsername,updateEmail};