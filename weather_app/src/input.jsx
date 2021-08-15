import {ChangeLocation,ChangeData} from "./actions/index.js";
import {useDispatch,useSelector} from 'react-redux';
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import './App.css';

const Input = () => {
    const dispatch = useDispatch();
    const place=useSelector(state=>state.locate);
    const theme=useSelector(state=>state.theme);
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
   
    return ( 
        <div className="input">
           <button className={theme?"choose":"choose_dark"} onClick={showModal}>Choose Location</button>
      
       <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Enter Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="input_loc" placeholder="Location" onChange={(e)=>dispatch(ChangeLocation(e.target.value))}/>
        </Modal.Body>
        <Modal.Footer>
          <button className="close" onClick={hideModal}>Cancel</button>
          <button className="save" onClick={()=>{
                    dispatch(ChangeData(place))
                    console.log("pressed");
                  }}>Save</button>
        </Modal.Footer>
      </Modal>
        </div>                
     );
}
 
export default Input;

