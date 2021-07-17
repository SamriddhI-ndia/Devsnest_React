import './App.css';
import './index.css';
import {useState} from 'react';

function App() {
let cal={};
let it={};
const [text,setText]=useState('Start adding items!')
const [first,setFirst]=useState(null);
const [second,setSecond]=useState(null);
const[eleme,setEleme]=useState([])
let visited=false;

const addItem=()=>{
if(first&&second){
  setText("");
  setFirst("");
  setSecond("");
  setEleme(prevState=>[...prevState,{item:first,calorie:second  }])
}
}

const removeItem=(ele)=>{
    setEleme(eleme.filter((el)=>el!==ele))
} 

const updateItem = (index, newItem) => {
  setEleme(eleme.map((l, i) => (i === index ? { ...l, ...newItem } : l)))
}

function RenderElement({ updateItem, removeItem, x, index }){
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="card">
      <div>
    {isEditing ? 
      (
      <input type='text' name='title'id='title' required value={it.item} placeholder="Item name"
      onChange={e=>{
        it={item:e.target.value} 
       }}
      />) 
      :
       ( <h2>{x.item}</h2>)
    }
    {isEditing ? (
      <input type='number'name='calorie'id='calorie'required value={cal.calorie} placeholder="Calorie amount"
        onChange={
           e=>{
            cal={calorie:e.target.value} 
           }
        }/>) 
      : 
      (
      <p> You have consumed {x.calorie} calories</p>)
    }
    
      <button className="delete" onClick={() => removeItem(x)}>Delete</button>
      <button className="edit" onClick={() => {
        if(isEditing&&visited){
          updateItem(index, {item:it.item,calorie:cal.calorie})
        }
        console.log(isEditing);
        setIsEditing(!isEditing)
        visited=true;}
      }>{isEditing ? 'Done' : 'Edit'}</button>
    
  </div>
</div>
  )
}

  return (
    <div className="App">
      <div className="input">
            <input type="text" placeholder="Item name" value={first} onChange={(e)=>{
            setFirst(e.target.value);
            }} required/>
            <input type="number" placeholder="Calorie amount" value={second} onChange={(e)=>{
              setSecond(e.target.value);
            }} required/>
        </div>
      
      <button onClick={()=>addItem() } className="button">Add Item</button>
      <h1>{text}</h1>
      <div className="container">
      {
        
        eleme.map((ele,index)=>(
            <RenderElement 	x={ele} index={index} updateItem={updateItem} removeItem={removeItem}/>
            
        ))
       
      } 
      </div> 
    </div>
  );
}

export default App;
