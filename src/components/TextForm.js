import React,{useState } from 'react'


// console.log(useState('Enter text here2'));
export default function TextForm(props) {
  const handleUpClick =()=>{
    // console.log("Uppercase was clicked" + text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase","success");
  }

  const handlelowClick =()=>{
    // console.log("Lowercase was clicked" + text);
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase","success");

  }

  const handleclear =()=>{
    // console.log("clear" + text);
    let newtext="";
    setText(newtext);
    props.showAlert("Cleared","success");

  }

  const handleCopy =()=>{
    console.log("Copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied on clipboard","success");

  }

  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed","success");

  }

  const handleOnChange =(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  

  const [text, setText] = useState('');
  // text="new text";    //wrong way to change the state
  // setText("new text");  //correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 >{props.heading}</h1>
    <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>Time to read {text.split(" ").length*0.008} (in min)</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

  </div>
  </>
  )
}
