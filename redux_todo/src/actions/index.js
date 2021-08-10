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
export { addItem,removeItem};