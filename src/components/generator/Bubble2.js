import React from 'react'
import './GeneratorMain.css';
import './Bubble2.css';


const Bubble2 = (props) =>
<p id="SpeechBubble2" className={props.animate ? 'AnimatingBubble2':''}
    onAnimationEnd={()=>{props.doneAnimating()}}
    >{props.value.sentence}</p>


export default Bubble2