import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {addNote,deleteNote} from './actions/index';
import {useState} from 'react';
import { reducerType } from './reducers';


function App() {
  const notes = useSelector((state:reducerType )=> state.notes);
  const dispatch = useDispatch();
  const [noteValue,setnoteValue]=useState<string>("");
  return (
    <div className="App">
      <input className="input" placeholder="Add notes" value={noteValue} onChange={(e)=>{
        setnoteValue(e.target.value)
      }}/>
      <button className="add" onClick={()=>{
        dispatch(addNote(noteValue))
        setnoteValue("");
      }}>Add</button>
      {
        notes.map((note:string,index:number)=>(
          <div>
          <h3 className="note" style={{display:"inline-block"}}>{note}</h3>
          <button className="delete" onClick={()=>{
            dispatch(deleteNote(index))
          }}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
