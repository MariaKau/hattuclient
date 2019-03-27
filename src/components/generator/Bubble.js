import React from 'react'
import './GeneratorMain.css';


const Bubble = (props) =>
<p id="SpeechBubble" className={props.animate ? 'AnimatingBubble':''}
    onAnimationEnd={()=>{props.doneAnimating()}}
    >{props.value.sentence}</p>


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
