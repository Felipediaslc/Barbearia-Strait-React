import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

 import Menu from './componentes/Menu/Menu'

import Routes from './Routes'
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (

<>
    <BrowserRouter >
    <Menu />
    <Routes />
    </BrowserRouter>
    
    <ToastContainer />
    </>
  );
}

export default App;
