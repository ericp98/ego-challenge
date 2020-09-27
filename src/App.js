import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Titulo from './components/Titulo';
import Filtros from './components/Filtros'

// Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  /* Show/Hide Sidebar */
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar); 

  return (
    <Router>

        <Route exact path="/models">
          <Navbar route="models" handleSidebar={() => showSidebar()}/>
          <Titulo />
          <Filtros />
          <Sidebar active={sidebar} closeSidebar={() => showSidebar()} /> 
        </Route>

        <Route exact path="/data-model">
          <Navbar route="data-model"/>
        </Route>

    </Router>
  );
}

export default App;
