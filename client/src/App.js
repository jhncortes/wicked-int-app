import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from 'react';

function App() {

  // ----- Testing a GET request -----
  // Just renders a test message in real-time 
  const [testMessage, setTestMessage] = useState('');
  // Renders anything from /test to home 
  useEffect(() => {
    fetch("/test")
    .then(res => res.json())
    .then(data => {setTestMessage(data)})
  })

  return (
    <div className="App">
      <h1> {testMessage.message} </h1>
    </div>
  );
}

export default App;
