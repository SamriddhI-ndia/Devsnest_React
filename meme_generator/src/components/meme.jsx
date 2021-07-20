import { useState } from "react";

const Meme = ({meme,setMeme}) => {
    const[form,setForm]=useState({
        template_id:meme.id,
        username:"ASHFLEMING",
        password:"samriddhi",
        boxes:[]
    })
function create(){
    console.log(form.boxes);
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
    form.boxes.map((box,index)=>{
        url+=`&boxes[${index}][text]=${box.text}`
    })
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(d=>{
        if(d.success)
            setMeme({...meme,url:d.data.url})
    })
}
function choose(){
    setMeme(null);
}
    return ( 
       
        <div className="meme">
            <img src={meme.url} alt="aai" />
            <div className="box">
            {
                 [...Array(meme.box_count)].map((_,index)=>(
                    <input placeholder={`Meme Text ${index+1}`} type="text" key={index} onChange={(e)=>{
                        const newBoxes=form.boxes;
                        newBoxes[index]={text:e.target.value}
                        setForm({...form,boxes:newBoxes})
                    }}/>
                ))
            }
            </div>
            <div className="div">
        <button onClick={create} className="create">Create Meme</button>
        <button onClick={choose} className="choose">Choose Template</button>
        </div>
        </div>
     );
}
 
export default Meme;