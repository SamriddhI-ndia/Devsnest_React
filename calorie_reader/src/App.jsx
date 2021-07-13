import './App.css';
import CardList from './card_list'
import React from 'react';
import {useState} from 'react'

function App() {

const [cards, setcards] = useState([
  {key:"1",text:"Pizza" ,calorie:"56"},
  {key:"2",text:"Coke" ,calorie:"500"},
  {key:"3",text:"Burger" ,calorie:"69"},
  {key:"4",text:"Brownie" ,calorie:"180"},
  {key:"5",text:"Paani Puri" ,calorie:"90"},
  {key:"6",text:"Fried Rice" ,calorie:"10"}
])
const [text,setText]=useState("");
const deletee=(key)=>{
  const newCards=cards.filter((card)=>card.key!==key)
  setcards(newCards);
  if(newCards.length===0){
    setText("No Item!")
  }
}
  return (
    <div className="App">
      <div className="head">
        <h1>Calorie Reader</h1>
      
      <div className="no">{text}</div>
      </div>
      <CardList cards={cards} handleDelete={deletee}/>
    </div>
  );
}

export default App;
