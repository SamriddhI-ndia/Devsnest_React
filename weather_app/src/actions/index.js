const ChangeLocation = (value) => {
    return {
        type:"UpdateLocation",
        payload:value,
    };   
}
const ChangeData = (location) => {
    console.log(location);
    var a=location?location:"Delhi";
    return (dispatch)=> {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=100f5d2ac8a84a31805160647210307&q=`+a)
      .then(res=>res.json())
      .then(data=>{
          dispatch({
              type:"UpdateData",
              payload:data,
          })
        })
        .catch(()=>{
            alert("Location not found!");
            window.location.reload();
        })
    };
}
const ChangeTheme=(theme)=>{
    return{
        type:"UpdateTheme",
        payload:theme,
    };
}
export {ChangeLocation, ChangeData, ChangeTheme};
