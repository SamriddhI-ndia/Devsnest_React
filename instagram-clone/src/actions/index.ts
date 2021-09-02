export interface User{
    username:string,
    profilepicture: string
}

const updateUser=()=>{
    // return{
    //     type:"UPADTE_USER",
    //     payload:user
    // }
    return(dispatch:any)=>{
        fetch("/data/user.json")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            
            dispatch({
                type:"UPDATE_USER",
                payload:data,
            })
        })
    }
}
const updatePost=()=>{
    
    return(dispatch:any)=>{
        // fetch(`https://meme-api.herokuapp.com/gimme/wholesomememes/25`)
        fetch(`https://api.unsplash.com/photos/random?client_id=WJKJlZ9MpEZ2NXMt63XubC4H6hztoZzGBdYx9Bzme9Q&count=30`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data[0].urls.regular);
            
            dispatch({
                type:"UPDATE_POST",
                payload:data,
            })
        })
        .catch(()=>{
            alert("Loading");
        })
    }
}

export {updatePost,updateUser};