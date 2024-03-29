import { Nav } from './nav';
import { Main } from './pages';
import NavProvider from './context/NavContext';
import './App.css';
import { useEffect, useState } from "react";


function App() {

  return (
    <div className="appContainer">
      <NavProvider>
        <div className="container">
          <Nav />
          <Main />
        </div>
      </NavProvider>
    </div>
  );
}

export default App;
