import './App.css';
import {useState} from 'react';
import Card from './card'

function App() {

const [data,setData]=useState([]);
const [item,setItem]=useState("");
const [calorie,setCalorie]=useState("");
const [text,setText]=useState("Start Adding Items!");

function changeItem(e){
 setItem(e.target.value)
}

function changeCalorie(e){
  setCalorie(e.target.value);
}

function addCard() {
  setText("");
  const newData = [...data, { "cal": calorie, "it":item}]
  setData(newData);
  setItem(undefined);
  setCalorie("")
}

  return (
    <div className="App">
      <input placeholder="Item" type="text" value={item} onChange={changeItem} required/>
      <input placeholder="Calorie" type="number" value={calorie} onChange={changeCalorie} required />
      <button className="button" onClick={addCard}>Add item</button>

        <h1 >{text}</h1>
      
      <div className="container">
     {
        data.map((i, index) => {
             return <Card key={index} data={data} setData={setData} cal={i.cal} it={i.it} index={index}  />
        })
    }
    </div>
    </div>
  );
}

export default App;
