import React from 'react'
import './GeneratorMain.css';
import './Bubble3.css';


const Bubble3 = (props) =>
<p id="SpeechBubble3" className={props.animate ? 'AnimatingBubble3':''}
    onAnimationEnd={()=>{props.doneAnimating()}}
    >{props.value.sentence}</p>


export default Bubble3