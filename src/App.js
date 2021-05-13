import React from 'react';
import './App.css';

const App =() => {
  const showMassage = ()　=> {
    alert('Hello!');
  }
  return (
    <div className="App" id="root" onClick={showMassage}>
      HelloReact!
    </div>
  );
}

export default App;
