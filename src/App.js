import React, { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  const [mode, setMode]= useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert]= useState (null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  const toggleMode=()=>{
    if (mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#253c35';
      showAlert("Dark mode has been enabled", "success");
      // document.title='TextUtils- Dark Mode';
      // setInterval(() => {
      //   document.title='TextUtils is amazing.';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install Textutils now.';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white'
      showAlert("Light mode has been enabled", "success");
      // document.title='TextUtils- Light Mode';
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3">
       <Routes>
          <Route exact path="/About" element={<About mode={mode}/>}>
          </Route>
            
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Router, Lowercase to Uppercase and vice versa" mode={mode}/> }>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
