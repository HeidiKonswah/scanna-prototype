import React from 'react';
import './App.css';
import Upload from './upload';
import Header from './header';
import OurServices from './our-services';

function App() {
  return (
    <div className="App">
      <Header />
      <OurServices />
      <Upload />
    </div>
  );
}

export default App;
