import { useDispatch,useSelector } from "react-redux";
import { removeItem } from "../actions";
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ListTodo = () => {
    const todos=useSelector((state)=>state.update);
    const dispatch = useDispatch();
    return ( 
        <div className="list">
            {
                todos.map((todo,index)=>(
                    <div className="item">
                        <h3>{todo}</h3>
                        
                       <button className="delete" onClick={()=>dispatch(removeItem(index))}><DeleteIcon/></button>
                    </div>
                ))
            }
            
        </div>
     );
}
 
export default ListTodo;