import './App.css';
import React from 'react';
import {useState,useEffect} from 'react'
import Template from './components/template';
import Meme from './components/meme';

function App() {

  const [templates,setTemplates]=useState([]);
  const[meme,setMeme]=useState(null);

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then((d)=>{
      console.log(d.data.memes);
      setTemplates(d.data.memes)
    })
    .catch(console.log("error!"))
  },[])

  return (
    <div className="App">
      <center><h1>Meme Generator</h1></center>
      {
        meme==null?<Template templates={templates} setMeme={setMeme} />:<Meme meme={meme} setMeme={setMeme}/>
      }
    </div>
  );
}

export default App;
