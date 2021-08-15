import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './card'
import {useSelector,useDispatch} from 'react-redux';
import {ChangeTheme} from './actions/index';

function App() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button className={theme?("dark_button"):"light_button"} onClick={()=>{
        dispatch(ChangeTheme(theme))
        }}>{theme?("Light"):("Dark")}</button>
     <Card/>

    </div>
  );
}
export default App;
