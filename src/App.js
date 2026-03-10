import { useState } from 'react';
import './App.css';

function App() {
  const [trigger, setTrigger] = useState(0);

  const quotes = [
    "Hello World!",
    "Random is fun!",
    "Keep coding!",
    "React rocks!",
    "You're awesome!",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

  return (
    <div className="App" style={{ backgroundColor: randomColor, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', color: 'white', fontSize: '48px', fontWeight: 'bold' }}>
        <h1>{randomQuote}</h1>
        <button onClick={() => setTrigger(trigger + 1)} style={{ padding: '10px 20px', fontSize: '20px', marginTop: '20px', cursor: 'pointer' }}>
          Click for Random
        </button>
      </div>
    </div>
  );
}

export default App;
