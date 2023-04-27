import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alerts from './Components/Alerts'
// import Contact from './Components/Contact';
import React, { useState } from 'react'


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  return (
    <div>
      {/* <Router> */}
        
      

        
        <div className='containers'>
        <Navbar title="Textutil" mode={'dark'} />
        <Alerts alert={alert} />
        {<Textform showAlert={showAlert} heading="Enter the text to analyse" />}

        {/* <Routes>
        <Route path="/" element= />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes> */}
        </div>
      {/* </Router> */}
    </div>


  );
}

export default App;
