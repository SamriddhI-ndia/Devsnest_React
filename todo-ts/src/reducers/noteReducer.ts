interface addNote{
    type:string,
    payload:string
}
interface deleteNote{
    type:string,
    payload:number
}
type ActionType=addNote|deleteNote;

const noteReducer=(state:any=[],action:ActionType)=>{
    //console.log(action.payload);
    
    switch(action.type){
        case 'ADD_NOTES':            
            return [...state,action.payload];
        case 'DELETE_NOTES':
            return state.filter((_:string,index:number)=>index!==action.payload);
        default:
            return state;
    }
    
}
export default noteReducer;