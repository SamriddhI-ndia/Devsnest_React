const card = (props) => {
    return ( 
        <div className="card">
            <h1>{props.text}</h1>
            <h2>You have consumed {props.calorie} calories today!</h2>
        </div>
     );
}
 
export default card;