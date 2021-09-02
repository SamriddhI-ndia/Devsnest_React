import { useSelector } from "react-redux";

const Suggestions=()=>{
    const user=useSelector((state:any)=>state.user);
    const url=useSelector((state:any)=>state.url);
    return (
       
                <div className="col">
                    <div style={{marginTop:"20px"}}>
                    <img className="suggestion-img" style={{width:"60px",height:"60px",border:"0px   solid white",display:"inline-block",marginTop:"20px"}} src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"/>
                    <h6 style={{display:"inline-block",marginLeft:"10px"}}>Professor</h6>
                    <span style={{marginTop:"40px",marginLeft:"120px",color:"blue"} }>Switch</span>
                    <p style={{marginLeft:"70px",marginTop:"-30px",color:"grey"}}>Profile name</    p>
                    </div>
                    <p style={{fontSize:"0.8rem",marginTop:"30px"}}><b>Suggestions   for you! </b><span style={{marginLeft:"130px"}}>View All</span></p>

                    {
                        [...Array(5)].map((_,index:number)=>(
                            <div style={{fontSize:"0.8rem"}}>
                                <img className="suggestion-img" style={{width:"30px",height:"30px",border:"0px solid white",display:"inline-block"}} src={url[index]==undefined?user.profilepicture:url[index].urls.regular}/>
                                <p style={{display:"inline-block",marginLeft:"10px"}}>@username{index+10} <span style={{float:"right",color:"blue",marginLeft:"140px"}}>Follow</span></p>
                                <p style={{color:"grey",marginLeft:"40px",marginTop:"-20px"}}>Profile name</p>
                               
                            </div>
                        ))
                    }
                    <p style={{fontSize:"0.6rem",color:"grey",margin:"10px"}}>About . Help . Press . API . Jobs . Privacy . Terms . Locations . Top accounts . Hashtags . Language
                    English (UK)<br/><br/> 2021 INSTAGRAM FROM SAMRIDDHI
                    </p>
                </div>
           
    )
}
export default Suggestions;