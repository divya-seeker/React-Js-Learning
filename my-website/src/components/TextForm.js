import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './TextFormCSS.css'
import Alert from './Alert';


export default function TextForm(props) {
  const[text,setText]=useState("Enter the text")
  const[btnText,setBtnText]=useState("Enable Dark Mode")
  const[myStyle,setMyStyle]=useState({color:"black",backgroundColor:"white"})
  const onchange=(event)=>{
    setText(event.target.value)
  }
  const onclick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  }
  const HandleDark=()=>{
    if(btnText==="Enable Dark Mode"){
      setMyStyle({color:"white",backgroundColor:"black"})
      setBtnText("Disable Dark Mode")
    }
    else if(btnText==="Disable Dark Mode"){
      setMyStyle({color:"black",backgroundColor:"white"})
      setBtnText("Enable Dark Mode")
    }
  }
  return (
    <>
    <div>
    <label className="labell" htmlFor="exampleFormControlTextarea1"><h2>{props.heading}</h2></label>
    <textarea style={myStyle} className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={onchange}></textarea>
    <button className="buttonSty btn btn-primary"  onClick={onclick}>Convert to UpperCase</button>
    <copyClipBoard><button className="buttonSty btn btn-primary"
  onClick={(e) =>  navigator.clipboard.writeText(e.target.value)}
>
  Copy
</button></copyClipBoard>
    </div>
    <div className='container my-3'>
      <h3>Count of Words and Character</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    <button type="button" className="btn btn-dark" onClick={HandleDark} >{btnText}</button>
    </>
  );
}
TextForm.propTypes={
    heading:PropTypes.string.isRequired
}
TextForm.defaultProps={
    heading:"Write SomeThing"
}