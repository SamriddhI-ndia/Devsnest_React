
import './index.css';
const card = (props) => {

    const cards=props.cards;
    const handleDelete=props.handleDelete;
    return ( 
        <div className="car_main">
            {
                cards.map((Card)=>(
                    <div className="card">
                        <h1 >{Card.text}</h1>
                        <button classname="delete" onClick={()=>handleDelete(Card.key)}>Delete</button>
                        <h2>You have consumed {Card.calorie} calories today!</h2>
                        
                     </div>
                ))
            }
        </div> 
    );
}
 
export default card;