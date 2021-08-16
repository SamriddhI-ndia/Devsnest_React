import { useSelector } from "react-redux";
import Input from "./input";
const Card = () => {
    const data=useSelector(state=>state.data);
    const theme=useSelector(state=>state.theme);

    var d=new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    theme?document.body.style.backgroundColor = "#1b1b1b":document.body.style.backgroundColor = "#e0e0e0"
    return ( 
        <div className={theme?"container-fluid":"container-fluid_dark"}>
            
        <div className="card">
            <div className={theme?"row_us row":"row_us_dark row"}>
                <div className="offset-md-2 col-8">
                    {
                     data?(
                     <div className={theme?"cont":"cont_dark"}>
                         <div className="whole">
                        <div className={theme?"left":"left_dark"}>
                        <h3>{days[d.getDay()]}</h3>
                        <h5>{d.toISOString().slice(0, 10)}</h5>
                        <hr/>
                        <h5>{data.location.name+", "+data.location.country}</h5>
                        <img className="main_img" src={data.current.condition.icon} alt="Weather Icon"/>
                        <p className="temp">{data.current.feelslike_c+"°C"}</p>
                        <h3>{data.current.condition.text}</h3>
                        </div>
                        <div className={theme?"right":"right_dark"}>
                        
                        <div className="extra">
                            <h5 className="detial">PRECIPITATION</h5>
                            <span>{data.current.precip_in}<span className="ch"> %</span> </span>
                        </div>
                        <div className="extra">
                            <h5 className="detial">HUMIDITY</h5>
                            <span>{data.current.wind_kph}<span className="ch"> %</span></span>
                        </div>
                        <div className="extra">
                            <h5 className="detial">WIND</h5>
                            <span>{data.current.humidity}<span className="ch"> kph</span></span>
                        </div>
                        <center>
                        <div className={theme?"forecast":"forecast_dark"}>
                            <img src={data.forecast.forecastday[0].hour[(d.getHours()+1)%24].condition.icon} alt="forecast"/>
                            <h6>{(d.getHours()+1)%12}{(d.getHours()+1)%24>12?" pm":" am"}</h6>
                            <h6>{data.forecast.forecastday[0].hour[(d.getHours()+1)%24].feelslike_c}°C</h6>
                        </div>
                        <div className={theme?"forecast":"forecast_dark"}>
                            <img src={data.forecast.forecastday[0].hour[(d.getHours()+2)%24].condition.icon} alt="forecast"/>
                            <h6>{(d.getHours()+2)%12}{(d.getHours()+2)%24>12?" pm":" am"}</h6>
                            <h6>{data.forecast.forecastday[0].hour[(d.getHours()+2)%24].feelslike_c}°C</h6>
                        </div>
                        <div className={theme?"forecast":"forecast_dark"}>
                            <img src={data.forecast.forecastday[0].hour[(d.getHours()+3)%24].condition.icon} alt="forecast"/>
                            <h6>{(d.getHours()+3)%12}{(d.getHours()+3)%24>12?" pm":" am"}</h6>
                            <h6>{data.forecast.forecastday[0].hour[(d.getHours()+3)%24].feelslike_c}°C</h6>
                        </div>
                        <div className={theme?"forecast":"forecast_dark"}>
                            <img src={data.forecast.forecastday[0].hour[(d.getHours()+4)%24].condition.icon} alt="forecast"/>
                            <h6>{(d.getHours()+4)%12}{(d.getHours()+4)%24>12?" pm":" am"}</h6>
                            <h6>{data.forecast.forecastday[0].hour[(d.getHours()+4)%24].feelslike_c}°C</h6>
                            </div>
                        <div className={theme?"forecast":"forecast_dark"}>
                            <img src={data.forecast.forecastday[0].hour[(d.getHours()+5)%24].condition.icon} alt="forecast"/>
                            <h6>{(d.getHours()+5)%12}{(d.getHours()+5)%24>12?" pm":" am"}</h6>
                            <h6>{data.forecast.forecastday[0].hour[(d.getHours()+5)%24].feelslike_c}°C</h6>
                        </div>
                        <Input/></center>
                        </div>
                        </div>
                    </div>
                     )
                     :(<div className="other">
                         <center>
                         <h1>No Place found!</h1>
                        <Input/>
                        </center>
                     </div>)
                    }
                </div>
            </div>
        </div>
        </div>
        
     );
}
 
export default Card;