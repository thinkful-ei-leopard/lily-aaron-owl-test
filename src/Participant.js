import React from 'react';


export default function Participant (props) {
  const isOnStage = props.onStage;
  const inSession = props.inSession;
  return (
    <div className="Participant">
      <img src="{props.avatar}"></img>
      <div className="name-stage-status">
        <h3> {props.name} </h3>
        {(() => {
          if (inSession === true && isOnStage === true) {
            return <p>On Stage</p>
          }
          else if (inSession === true && isOnStage === false) {
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