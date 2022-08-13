
import './App.css';
import {useState} from 'react'
function App() {

  const [name, setName] = useState('ashutosh')

  const handleClick = ()=>{
    setName('abhishek')
  }
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick = {handleClick}>Change Name</button>
    </div>
  );
}

export default App;
