import './App.css';

let boards=[];
for(let i=0;i<8;i++){
  for(let j=0;j<8;j++){
    if(i%2==0){
      boards.push(<span className="block_even"x>{i}{j}</span>)
    }
    else{
      boards.push(<span className="block_odd"x>{i}{j}</span>)
    }
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
