import React from 'react'
import './GeneratorMain.css';
import './Bubble.css';
import {Animated} from "react-animated-css";

const Bubble = (props) =>
<p id="SpeechBubble" className={props.animate ? 'AnimatingBubble':''}
    onAnimationEnd={()=>{props.doneAnimating()}}
    ><Animated animationIn="heartBeat" className="animated">{props.value.sentence}</Animated></p>


export default Bubble

// export default class Speechbubble extends Component {
//   render() {
    
//     return (
//       <div>
//         <div>{getSentence}</div>
//       </div>
//     )
//   }
// }
