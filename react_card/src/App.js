import './App.css';
import img from './css-is-awesome.jpg'

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={img} className="image"/>
        <h2>REACT CARD</h2>
        </div>
    </div>
  );
}

export default App;
