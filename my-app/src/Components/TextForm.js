import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Setting it up");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
        console.log("Setting it up");
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnClick = (event) =>{
        console.log("Uppercase was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter the text');

  return (
    <>
    <div className='container'>

        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnClick} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    
    <div className="container">
        <h1>Your text summary</h1>
        <p>Your text has {text.split(" ").length} words and {text.length} characters</p>
        <p>This text can be read in {0.008 * text.split(" ").length} minutes</p>


        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
