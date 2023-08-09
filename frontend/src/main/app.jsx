import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Logo from '../components/template/logo'
import Nav from '../components/template/nav'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Logo></Logo>
        <Nav></Nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
