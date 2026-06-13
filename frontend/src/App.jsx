import React from 'react';

export default function App() {
  const systemName = "Support Ticket System";

  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '40px', 
      textAlign: 'center', 
      backgroundColor: '#f4f6f9', 
      height: '100vh' 
    }}>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#2563eb' }}>{systemName}</h1>
        <p style={{ color: '#4b5563', fontSize: '16px' }}>
          The frontend interface is connected and running successfully.
        </p>
        <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', margin: '20px 0' }} />
        <div style={{ 
          display: 'inline-block', 
          backgroundColor: '#10b981', 
          color: '#ffffff', 
          padding: '8px 16px', 
          borderRadius: '20px', 
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          CI/CD Pipeline Status: Passing
        </div>
      </div>
    </div>
  );
}