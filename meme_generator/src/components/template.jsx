import React from "react";
import '../App.css'
import { useState } from "react";

const Template = ({templates,setMeme}) => {

    return (
        <center>
        <div className="cont">     
            {           
                templates.map(template=>(
                    <div style={{backgroundImage:`url('${template.url}')`}} className="template" onClick={()=>setMeme(template)} key={template.id}>
                    </div>
                )
                )
            }
        </div>
        </center>
    );
}
 
export default Template;