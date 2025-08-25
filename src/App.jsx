import React from 'react'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>Mr. Postcard</h1>
      <p style={{ textAlign: 'center', color: '#666', fontSize: '18px' }}>
        Professional Postcard Services Since 1996
      </p>
      
      <div style={{ maxWidth: '800px', margin: '40px auto', lineHeight: '1.6' }}>
        <h2>Welcome to Mr. Postcard</h2>
        <p>
          Your premier destination for professional postcard services. We've been helping 
          businesses and individuals with their direct mail needs since 1996.
        </p>
        
        <h3>Our Services Include:</h3>
        <ul>
          <li>Real Estate Postcards</li>
          <li>Monthly Calendar Postcards</li>
          <li>Sports Schedule Postcards</li>
          <li>Holiday and Seasonal Postcards</li>
          <li>Full Color Custom PostCards</li>
          <li>Mailing Services</li>
          <li>Business Cards</li>
          <li>Websites and Hosting</li>
          <li>Newsletters, Flyers, Folders etc.</li>
        </ul>
        
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> 404.849.6139</p>
          <p><strong>Fax:</strong> 404.921.1023</p>
          <p><strong>Email:</strong> info@mrpostcard.com</p>
        </div>
      </div>
    </div>
  )
}

export default App