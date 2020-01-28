import React from 'react';


export default function Participant (props) {
  return (
    <div className="Participant">
      <img class="useravatar" src={props.avatar} alt="avatar"></img>
      <div className="name-stage-status">
        <h3> {props.name} </h3>
        {(() => {
          if (props.inSession == true && props.onStage === true) {
            return <p>On Stage</p>
          }
          else if (props.inSession == true && props.onStage === false) {
            return <p>In Session</p>
          }  
          else {
            return <p>Left Session</p>
          }
        }) ()}
      </div>
    </div>
  );
}

// function ParticipantOut (props) {
//   return (
//     <div className="Participant">
//       <img src="{props.avatar}"></img>
//       <div className="name-stage-status">
//         <h3> {props.name} </h3>
//         <p> Left Session </p>
//       </div>
//     </div>
//   );
// }


// export default {
//   ParticipantIn,
//   ParticipantOut
// }