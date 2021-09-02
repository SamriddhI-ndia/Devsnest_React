const addNote=(note:string)=>{
    return {
        type:"ADD_NOTES",
        payload:note
    }
}
const deleteNote=(id:number)=>{
    return {
        type:"DELETE_NOTES",
        payload:id
    }
}
export {addNote,deleteNote};