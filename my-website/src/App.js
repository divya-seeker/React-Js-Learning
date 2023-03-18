import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const showAlert=(msg,type)=>{
    setAlert({message:msg,type:type})
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark")
      document.body.style.backgroundColor="#160058";
      document.body.style.color="white";
      showAlert("Dark Mode On","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="#ffdaf5";
      document.body.style.color="black";
      showAlert("Light Mode On","success");
    }
  }
  return (
    <>
    <Router>
    <div>
      <NavBar toggleMode={toggleMode} mode={mode}  title="Divya Blogger" about="About Divya"></NavBar>
      <Alert alert={alert} showAlert={showAlert}/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
      </Routes>
     </div>
    </Router>
    </>
  );
}

export default App;
