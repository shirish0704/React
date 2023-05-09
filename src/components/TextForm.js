import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On changed");
    setText(event.target.value);
  };
  const handleCopy=()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const [text, setText] = useState("");
  // text =" new text" wrong way to change the state
  // setText("new text"); correct way to chnage the state
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#253c35':'white', color: props.mode==='dark'?'white':'black'}} value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button type="submit" onClick={speak} className="btn btn-success mx-2 my-2">Speak</button>
        <button className="btn btn-success mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3  "style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters.  
        </p>
        <p>{0.008* text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text : "Enter something in the textbox abouve to preview."}</p>
      </div>
    </>
  );
}
