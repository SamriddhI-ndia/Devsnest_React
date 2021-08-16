import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addItem} from '../actions/index'
import { TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

const AddTodo = () => {
    const [item,setItem]=useState("Add item");
     const dispatch = useDispatch();
    return ( 
        <div className="hi">
            <TextField 
            id="outlined-basic" 
            className="input"
            label="Item" 
            variant="outlined" 
            placeholder="Add Item"
            value={item}
            inputProps={{ style: { fontFamily: 'Arial', color: 'white',boxShadow: 'inset 6px 6px 10px #07080a,inset -6px -6px 20px #1b2226',height:'1vmin',border:'0px solid black',borederRadius:'10px'}}}
            onChange={(e)=>{
                setItem(e.target.value);
            }}
            />
            <button className="add" onClick={()=>{
                dispatch(addItem({item:item,checked:false}))
                setItem("");
                }}><AddIcon/></button>
        </div>
     );
}
 
export default AddTodo;