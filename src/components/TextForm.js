import React,{useState} from 'react'


export default function TextForm(props){
  
    // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState('Enter text here');
  //text ="new text "; // wrong way to change the state
 // setText("new text"); // correct way to change the state.


  const handleUpClick =()=>{
    console.log('Uppercase was clicked');
    setText(text.toUpperCase())
    props.showAlert("Converted to Uppercase","success");

  }

  const handleOnChange =(e)=>{
     console.log("On Change")
     setText(e.target.value)
  }

  const handleLoClick =() =>{
    console.log("LowerCase clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","success");
  }

  const handleClearClick = ()=>{
    console.log('clear Text');
    setText('');
    props.showAlert("Text Cleared","success");
  }

  const handleCopy =()=>{
    console.log("Copying Text");
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed","success");
  }

    return (
      <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" rows="8" onChange={handleOnChange} id='myBox' placeholder='Enter your text' value = {text} style ={{background : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
            </div> 
            <button className = "btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className = "btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className = "btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
            <button className = "btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            
            <button className = "btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces </button>
        </div>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>
            Your Text Summary
          </h1>
           <p>{text.split(' ').length} words and {text.length}</p>
           <p>{.008*text.length} minutes read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
        </div>
        </>
    )
}