import { useSelector } from "react-redux";

const Image=()=>{
    const url=useSelector((state:any)=>state.url);
    return (
    <div className="container">
        <div className="row">
            {[...Array(30)].map((_:any,index:number)=>(
                <div className="col">
                <img style={{width:"290px",height:"280px",margin:"15px 5px"}} src={url[index]==undefined?"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg":url[index].urls.regular}/>
            </div>
            ))
            }
        </div>
    </div>
    )
}
export default Image;