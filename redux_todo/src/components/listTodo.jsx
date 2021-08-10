import { useDispatch,useSelector } from "react-redux";
import { removeItem } from "../actions";
import React from 'react';
import { Button } from "@material-ui/core";

const ListTodo = () => {
    const todos=useSelector((state)=>state.update);
    const dispatch = useDispatch();
    return ( 
        <div className="list">
            {
                todos.map((todo,index)=>(
                    <div className="item">
                        <h3>{todo}</h3>
                        
                       <Button className="delete" variant="outlined" color="secondary" onClick={()=>dispatch(removeItem(index))}>Delete</Button>
                        
                    </div>
                ))
            }
            
        </div>
     );
}
 
export default ListTodo;