import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addItem} from '../actions/index'
import { Button, TextField } from "@material-ui/core";

const AddTodo = () => {
    const [item,setItem]=useState(" ");
     const dispatch = useDispatch();
    return ( 
        <div className="add">
            <TextField 
            id="outlined-basic" 
            className="input"
            label="Item" 
            variant="outlined" 
            placeholder="Add Item"
            value={item}
            onChange={(e)=>{
                setItem(e.target.value);
            }}
            />
            <Button variant="outlined" color="primary" className="add" onClick={()=>{
                dispatch(addItem(item))
                setItem("");
                }}>Add</Button>
        </div>
     );
}
 
export default AddTodo;