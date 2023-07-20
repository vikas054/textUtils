
import './App.css';
import Alert from './components/Alert';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'

 function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const [alert,setAlert] = useState(null);


  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type :type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#06344af5';
      showAlert("Dark mode has been enabled","success")
    } else {
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light mode has been enabled","success")

    }
  }

  return (
    <>
  {/* <Navbar tittle = "TextUtils" aboutText = "About TextUtils"/> */}
  {/* <Navbar   aboutText = "About TextUtils"/> */}
  {/* <Navbar /> */}
     <Navbar tittle = "TextUtils" aboutText = "About TextUtils" mode ={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} />
     <div className ="container my-3">
     <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode={mode} />
    {/* <About/> */}
     </div>
   
    </>

  );
}

export default App;
