import './App.css';
import Card from './card'

function App(props) {
  return (
    <div className="App">
      <div className="head">
        <h1>Calorie Reader</h1>
      </div>
      <Card text="Pizza" calorie="56"/>
      <Card text="Coke" calorie="500"/>
      <Card text="Burger" calorie="69"/>
      <Card text="Brownie" calorie="180"/>
      <Card text="Paani Puri" calorie="90"/>
      <Card text="Fried Rice" calorie="10"/>
    </div>
  );
}

export default App;
