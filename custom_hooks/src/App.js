import './App.css';
import useFetch from './useFetch';
import Card from './card';
function App() {

  const {data,isPending,error}=useFetch("https://random.imagecdn.app/500/150");

  return (
    <div className="App">
      { isPending && <div>Loading...</div> }
            { error && <div> { error} </div>}
            { data && <Card image={data.url}/> }
    </div>
  );
}

export default App;
