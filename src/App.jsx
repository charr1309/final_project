import React from 'react';

console.log('App.jsx is loading...');

function App() {
  console.log('App component is rendering...');
  
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue', minHeight: '100vh' }}>
      <h1 style={{ color: 'red', fontSize: '48px' }}>TEST - Can you see this?</h1>
      <p style={{ color: 'blue', fontSize: '24px' }}>If you can see this text, React is working!</p>
    </div>
  );
}

console.log('App component defined');

export default App;