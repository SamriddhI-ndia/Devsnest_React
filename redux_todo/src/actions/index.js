const addItem = (item) => {
    return {
        type:"Add_item",
        payload:item,
    }
}
const removeItem = (index) => {
    return {
        type:"Remove_item",
        payload:index,
    }
}
const checked=(status)=>{
    return {
        type:"Check_item",
        payload:status,
    }
}
export { addItem,removeItem,checked};