import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const[placeData,setPlaceData]=useState(
    null);
  const[location,setLocation]=useState("Delhi");
  const updateLocation=()=>{
    fetch('http://api.weatherapi.com/v1/current.json?key=100f5d2ac8a84a31805160647210307&q='+location)
    .then(res=>res.json())
    .then((api_data)=>{
      console.log(api_data);
      setPlaceData(api_data);
    })
  }  
  return (
    <div className="App">
        <div className="container justify-content-center align-items-center" style=  {{height:'80vh'}}>
            <div className="row ">
            <center>
              <div className="col-6 form form_css">
                  <input type="text" placeholder="Enter Location" onChange={(e)=>{
                    setLocation (e.target.value)
                    }}/>
                  <button onClick={updateLocation}>Submit</button>
              </div>
              <div className="col-4 card weather_card">
                  {placeData ? 
                  (<div>
                    <img src={placeData.current.condition.icon}/>
                    <h1>{placeData.current.feelslike_c+"°"}</h1>
                    <p>{placeData.current.condition.text}</p>
                    <h5>{placeData.location.country}</h5>
                    <div className="div">
                    
                      <div className="info col">
                        <p>Precipiattion</p>
                        <h3>{placeData.current.precip_in}</h3><span>%</span>
                      </div>
                      <div className="info col">
                        <p>Humidity</p>
                        <h3>{placeData.current.humidity}</h3><span>%</span>
                      </div>
                      <div className="info col">
                        <p>Wind now</p>
                        <h3>{placeData.current.wind_kph}</h3><span>{placeData.current.wind_dir}</span>
                      </div>
                    </div>
                    </div>)
                  :
                  (<div>No data available</div>)}
              </div>
              </center>
            </div>
        </div>
    </div>
  );
}
export default App;
