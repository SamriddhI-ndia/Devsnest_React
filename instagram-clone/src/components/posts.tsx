import { useSelector } from "react-redux";
import { useEffect } from "react";
import {updatePost} from '../actions/index'
import {useDispatch} from 'react-redux';
import { useState } from "react";

const Posts=()=>{
    const url=useSelector((state:any)=>state.url);
    const user=useSelector((state:any)=>state.user);
    const dispatch = useDispatch();
    const[liked,setLiked]=useState(true);
    useEffect(()=>{
        dispatch(updatePost())
    },[])

    return (
        <div className="container">
            <div className="row">
                <h1></h1>
                {   url==null?(console.log("loading")
                ):
                    [...Array(30)].map((_:any,index:number)=>(
                        <div  className="col-md-10 p-0 post">
                            <div style={{margin:"10px"}}>
                            <img className="profile_picture" src={user.profilepicture} alt="load nahi ho paai" onDoubleClick={()=>{
                                console.log("hua")
                                
                                setLiked(!liked)}}/>
                            <h6 >@username{index+
                            1}</h6>
                            
                            <i className="bi bi-three-dots dot"></i>
                            </div>
                           <img className="post-img"  src={url[index]==undefined?user.profilepicture:url[index].urls.regular} alt="load nh ho pai"/>

                           <div className="post-icon">
                               <span onClick={()=>{setLiked(!liked)}}>
                           {liked?(<i style={{color:"#ff3333"}} className="bi bi-heart-fill"></i>):(<i className="bi bi-heart"></i>)}
                           </span>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-share"></i>
                            <i style={{float:"right"}} className="bi bi-file-arrow-down"></i>
                            </div>

                            <div>
                            <img className="profile_picture" src={user.profilepicture} alt="load nahi ho paai"/>
                            <p className="liked" >Liked by <b>username{index+2}</b> and {index+40} others.</p>
                                </div>

                            <div className="add_comment">
                            <i className="bi bi-emoji-laughing" ></i>
                            <input placeholder="Add a comment..." style={{display:"inline-block",margin:"15px"}}/>
                            <span style={{float:"right",margin:"5px"}}>Post</span>
                            </div>
                        </div>
                    ))
                } 
                
            </div>
        </div>
    )
}
export default Posts;