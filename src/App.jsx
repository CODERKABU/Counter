import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('counterValue');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('counterValue', count);
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;