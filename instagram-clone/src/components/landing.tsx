import { useSelector } from "react-redux";
import Posts from "./posts";
import Suggestions from "./suggestions";
const Landing=()=>{
const user=useSelector((state:any)=>state.user);
const url=useSelector((state:any)=>state.url);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="card story">
                    
                        {
                            [...Array(15)].map((_,index)=>(
                                <div className="story_img">
                                   
                                    <img src={url[index+14]==undefined?user.profilepicture:url[index+14].urls.regular} alt="load nh ho pai"/>
                                    <p style={{margin:"4px 14px",fontSize:"0.8rem",color:"grey"}}>user{index+2}</p>
                                </div>
                            ))
                        }
                         
                    </div>
                    <Posts/>
                   
                </div>
                <div className="col-md-4">
                        <Suggestions/>
                </div>
            </div>
        </div>
    );
}
export default Landing;