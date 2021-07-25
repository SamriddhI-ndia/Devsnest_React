import React from "react";
import useFetch from "./useFetch";
import Card from './card';
import './index.css'

function App() {
  const{data,isPending}= useFetch("https://random.imagecdn.app/500/150");

console.log(data);
  return (
    <div className="App">
      {data&&<Card image={data.url}/> }  
    </div>
  );
}

export default App;
