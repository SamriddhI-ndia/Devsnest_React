import { useState }from "react";
import {useEffect} from "react";


const useFetch = (url) => {
    
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [isPending,setIsPending]=useState(true);
    useEffect(() => {
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('Could not fetch data!');
                console.log(error);
            }
            return res;
        })
        .then(data=>{
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err=>{
            setError(err.message);
            setIsPending(false);
        })
    }, [])
    return {data,isPending};
}
 
export default useFetch;