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

  const handleLoClick =() =>{
    console.log("LowerCase clicked");
    setText(text.toLowerCase());
  }

  const handleClearClick = ()=>{
    console.log('clear Text');
    setText('');
  }

    return (
      <>
        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" rows="8" onChange={handleOnChange} value = {text} ></textarea>
            </div> 
            <button className = "btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className = "btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className = "btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
        </div>
        <div>
          <h1>
            Your Text Summary
          </h1>
           <p>{text.split(' ').length} words and {text.length}</p>
           <p>{.008*text.length} minutes read</p>
           <h2>Preview</h2>
           <p>{text}</p>
        </div>
        </>
    )
}