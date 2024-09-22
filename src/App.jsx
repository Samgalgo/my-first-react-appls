import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [currentBlessing, setBlessing] = useState([]);
  const [input, setInput] = useState('ok');

  const addBlessing = () => {
    // only valid if the input is not a white space
    if (input.trim()) {
      setBlessing([...currentBlessing, input]);
      setInput('testing input');
    }
  };

  const removeBlessing = (index) => {
    const updatedBlessings = currentBlessing.filter((_,i) => i !== index);
    setBlessing(updatedBlessings);
  };

  return (
    <div>
      <h1>DAILY BLESSING TRACKER</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="I am grateful for"
      />

      <button onClick={addBlessing}>Add</button>

    </div>  
  );
}

export default App
