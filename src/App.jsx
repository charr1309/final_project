import React from 'react'

function App() {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Mr. Postcard</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>
        Professional postcard services since 1996
      </p>
      <div style={{ marginTop: '30px' }}>
        <h2>Our Services:</h2>
        <ul>
          <li>Real Estate Postcards</li>
          <li>Business Cards</li>
          <li>Custom Design</li>
          <li>Mailing Services</li>
        </ul>
      </div>
    </div>
  )
}

export default App