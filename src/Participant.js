import React from 'react';


export default function Participant (props) {
  let sessionStatus = '';
  if (props.inSession === true) {

    if(props.onStage === true) {
      sessionStatus = 'On Stage';
    }
    else if (props.onStage === false) {
      sessionStatus = 'In Session';
    }
    else {
      console.log(props.onStage);
      sessionStatus = 'In Session2';
    }

  }  
  else if(props.inSession === false) {
    sessionStatus = 'Left Session';
  }
  

  return (
    <div className="Participant">
      <img class="useravatar" src={props.avatar} alt="avatar"></img>
      <div className="name-stage-status">
        <h3> {props.name} </h3>
        <p> {sessionStatus} </p>
      </div>
    </div>
  );
}