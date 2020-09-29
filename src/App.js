import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Titulo from './components/headerPage/Titulo';
import Filtros from './components/headerPage/Filtros';
import Cars from './components/bodyPage/Cars';
import Footer from './components/footerPage/Footer';

// Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  /* Show/Hide Sidebar */
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar); 

  const [filterActive, setFilterActive] = useState('Todos');
  const applyFitler = (filter) => setFilterActive(filter);

  const [sortActive, setSortActive] = useState('Nada');
  const applySort = (sort) => setSortActive(sort);

  return (
    <Router>

        <Route exact path="/models">
          <Navbar route="models" handleSidebar={() => showSidebar()}/>

          <Titulo />

          <Filtros 
            activeFilter={(filter) => applyFitler(filter)} 
            actualFilter={filterActive}
            activeSort={(sort) => applySort(sort)}
            actualSort={sortActive}
          />

          <Cars 
            filterBy={filterActive} 
            sortBy={sortActive}
          />

          <Sidebar active={sidebar} closeSidebar={() => showSidebar()} /> 

        </Route>

        <Route exact path="/data-model">
          <Navbar route="data-model" handleSidebar={() => showSidebar()}/>
          <Sidebar active={sidebar} closeSidebar={() => showSidebar()} /> 
        </Route>

    </Router>
  );
}

export default App;
