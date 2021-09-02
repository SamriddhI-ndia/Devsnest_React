import { useSelector } from "react-redux";

const Profile=()=>{
    const user=useSelector((state:any)=>state.user);
    const url=useSelector((state:any)=>state.url);
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <img className="profile" src={user.profilepicture}/>
                </div>
                <div className="col-8 profile-details">
                    <h3>{user.username}</h3>
                    <button>Edit Profile</button>
                    <i className="bi bi-gear-wide"></i>
                    <div>
                    <span className="posts"><b>9</b> posts</span>
                    <span className="followers"><b>200</b> followers</span>
                    <span className="following"><b>200</b> following</span>
                    </div>
                    <p><span style={{fontSize:"1.2rem",marginLeft:"-1px"}}><b>Anonymous</b></span><br/>
                    An Instagram bio is the small area under your username represent your brand.</p>
                </div>
            </div>
            
            <div className=" high">
                    
                    {
                        [...Array(5)].map((_,index)=>(
                            <div className="highlights">
                               
                                <img src={url[index+4]==undefined?user.profilepicture:url[index+4].urls.regular} alt="load nh ho pai"/>
                                <p style={{margin:"9px 8px",fontSize:"0.8rem",color:"grey"}}>hightlight{index+2}</p>
                            </div>
                        ))
                    }
                     
                </div>
            
            <hr/>
            <div className="row" style={{marginTop:"50px"}}>
            {[...Array(9)].map((_:any,index:number)=>(
                <div className="col">
                <img style={{width:"290px",height:"280px",margin:"15px 5px"}} src={url[index+20]==undefined?user.profilepicture:url[index+20].urls.regular}/>
            </div>
            ))
            }
            </div>
        </div>
    )
}
export default Profile;