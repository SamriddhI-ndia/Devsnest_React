import { useState } from "react";

const Count = () => {
    const [count, setcount] = useState(0)
    function increase(){
      setcount(count+1)
    }
    return ( 
        <div className="count" onClick={increase}>
            {count}
        </div>
     );
}
 
export default Count;