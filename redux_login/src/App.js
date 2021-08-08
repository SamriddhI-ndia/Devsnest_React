import {TextField} from '@material-ui/core';
import {updateUsername,updateEmail} from './actions/index'
import { useSelector,useDispatch } from 'react-redux';
import './App.css';

function App() {
  const user=useSelector(state=>state.user);
  const mail=useSelector(state=>state.email);
  const dispatch = useDispatch();
  return (
    <div className="App">
        <div className="container">
                <TextField id="outlined-basic" className="input" label="Username" variant="outlined" onChange={(e)=>{
                    dispatch(updateUsername(e.target.value));
                }}/>
                <TextField id="outlined" label="Email" className="input" variant="outlined" onChange={(e)=>{
                    dispatch(updateEmail(e.target.value));
                }}/>
                <div className="data">
                <h2>Username: {user}</h2>
                <h2>Email: {mail}</h2>
                </div>
        </div>
    </div>
  );
}

export default App;