import './App.css';
import Card_a from './card_a'
import Card_b from './card_b'

let boards=[];
let count=0;
for(let i=0;i<8;i++){
  for(let j=0;j<8;j++){
    i%2==0?boards.push(<Card_a key={count}/>):boards.push(<Card_b key={count}/>);
    count+=1;
  }
}
function App() {
  return (
    <div className="App">
      <div className="board">
        <div >{boards}</div>
      </div>
    </div>
  );
  }
export default App;
