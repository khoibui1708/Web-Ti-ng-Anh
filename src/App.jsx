import React from 'react';
import Navbar from './Components/Navbar1/Navbar';
import VariableWidthGrid from './Components/Layout/Layout';


const App = () => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundSize: 'cover', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Navbar at the top */}
      <header>
        <Navbar/>
      </header>
     
      <body style = {{background: ' linear-gradient(to bottom,white, white,white,#1873D3, #1873D3)'}}>
        <br/> 
        <VariableWidthGrid/>
      </body>
    </main>
  );
};

export default App;

