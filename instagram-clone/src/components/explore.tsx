import { useSelector } from "react-redux";

const Image=()=>{
    const url=useSelector((state:any)=>state.url);
    const user=useSelector((state:any)=>state.user);
    return (
    <div className="container">
        <div className="row">
            {[...Array(30)].map((_:any,index:number)=>(
                <div className="col">
                <img style={{width:"290px",height:"280px",margin:"15px 5px"}} src={url[index]==undefined?user.profilepicture:url[index].urls.regular}/>
            </div>
            ))
            }
        </div>
    </div>
    )
}
export default Image;