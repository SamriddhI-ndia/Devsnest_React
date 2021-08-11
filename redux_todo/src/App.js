import './App.css';
import AddTodo from './components/addTodo';
import ListTodo from './components/listTodo'

function App() {
  return (
    <>
    <center><h1>ToDo List</h1></center>
    <div className="App">
      <AddTodo/>
      <ListTodo/>
    </div>
    </>
  );
}

export default App;
