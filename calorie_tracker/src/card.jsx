import { useState } from "react";
import './App.css'

const Card = ({data,setData,cal,it,index}) => {

const [edit,setEdit]=useState(false);
const [itemedit,setItemedit]=useState(it);
const [caledit,setCaledit]=useState(cal);

function changeIt(e){
setItemedit(e.target.value);
}

function changeCal(e){
setCaledit(e.target.value);
}

function removeItem(){
    const newData=data.filter((i,key)=>index!==key)
    setData(newData);
}

function editing(){
    const newData=data.filter((i,key)=>{
        if(key===index){
            i.it=itemedit;
            i.cal=caledit;
        }
        return i;
    }
      
    )
    setData(newData);
    setEdit(false);
}

    return ( 
        <div className="card">
            {edit?
            (<div>
                <input value={itemedit} type="text" onChange={changeIt}/>
                <input value={caledit} type="number" onChange={changeCal}/>
                <button className="delete" onClick={removeItem}>Delete</button>
                <button className="edit" onClick={editing}>Save</button>

            </div>)
            :
            (<div >
                <h2>{it}</h2>
                <p>You have consumed {cal} calories!</p>
                <button className="delete" onClick={removeItem}>Delete</button>
                <button className="edit" onClick={()=>setEdit(true)}>Edit</button>
            </div>)  
}
        
        </div>
        
     );
}
 
export default Card;