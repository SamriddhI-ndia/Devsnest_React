import { useDispatch,useSelector } from "react-redux";
import { removeItem,checked } from "../actions";
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import '../App.css'

const ListTodo = () => {
    const todos=useSelector((state)=>state.update);
    const dispatch = useDispatch();
    return ( 
        <div className="list">
            {
                todos.map((todo,index)=>(
                    <div className="item" key={index}>
                        
                        <input type="checkbox" onClick={()=>dispatch(checked(index))} className="checked"/>

                        {todo.checked?(<h3 style={{textDecoration:"line-through",}}>{todo.item}</h3>):(<h3 style={{textDecoration:"none",}}>{todo.item}</h3>)}
                                            
                       <button className="delete" onClick={()=>dispatch(removeItem(index))}><DeleteIcon/></button>
                    </div>
                ))
            }
            
        </div>
     );
}
 
export default ListTodo;