import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpclick = (e) => {
        e.preventDefault();
       let newText=Text.toUpperCase();
        console.log("UpperCase was clicked" + Text);
        setText(newText)
        props.showAlert('UpperCase Has Been done', 'success')
    }

    const handleloclick = (e) => {
        e.preventDefault();
       let newText=Text.toLowerCase();
        console.log("UpperCase was clicked" + Text);
        setText(newText)
        props.showAlert('Lower Case Has Been done', 'success')
    }

    const handleclearclick = (e) => {
        e.preventDefault();
       let newText='';
        console.log(" ");
        setText(newText)
        props.showAlert('Text Has Been Cleared', 'success')
    }

    const ReverseText=(e)=>{
        e.preventDefault();        
        setText(Text.split('').reverse().join(''));
        props.showAlert('Text Has Been Reversed', 'success')


    }
    const firstLetterCapital=(e)=>{
        e.preventDefault();
        const newText =Text.charAt(0).toUpperCase() + Text.substring(1);
        setText(newText);
        props.showAlert('First Letter Has Been done Capitalized', 'success')
      }

    const handleOnchange = (event) => {
        console.log("handle on change");
        setText(event.target.value);
    }
    const [Text, setText] = useState("Enter the Text To change");
  return (
    <div className="container">
            <form>
            <div className="mb-10">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={Text} onChange={handleOnchange} id="mybox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary my-3 mx-3" onClick={handleUpclick} >Uppercase button</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleloclick}>LowerCase Button</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleclearclick}>Clear Text</button>
            <button className="btn btn-primary my-3 mx-3" onClick={ReverseText}>Reverse Text</button>
            <button className="btn btn-primary my-3 mx-3" onClick={firstLetterCapital}>Capital First Letter</button>

            <div className='container'>
                <h1>Text Summary</h1>
                <p>{Text.split("").length } words and  {Text.length} Characters</p>
                <p>This will take approx ({0.008 * Text.split(" ").length}) minutes to read </p>

            </div>
            </form>
            </div>
  )
}
