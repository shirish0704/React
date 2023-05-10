import React, { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


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
    }, 1800);
  }
  const toggleMode=()=>{
    if (mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#253c35';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white'
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below." mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
