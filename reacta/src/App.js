import React from 'react';

import './activos/css/App.css';

//import componenets
//import ComponentePrueba1 from './componentes/ComponentePrueba';
import Header from './componentes/Header';
import Slider from './componentes/Slider';
import Sidebar from './componentes/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Sidebar/>
      <div className="center">
        <div className="clearfix"></div>

      </div>
     
    </div>
    
  );
}

export default App;
