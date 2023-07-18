import React,{useState} from 'react'


export default function TextForm(props){
  
    // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState('Enter text here');
  //text ="new text "; // wrong way to change the state
 // setText("new text"); // correct way to change the state.


  const handleUpClick =()=>{
    console.log('Uppercase was clicked');
    setText(text.toUpperCase())

  }
  const handleOnChange =(e)=>{
     console.log("On Change")
     setText(e.target.value)
  }

    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" rows="8" onChange={handleOnChange} value = {text} ></textarea>
            </div> 
            <button className = "btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}