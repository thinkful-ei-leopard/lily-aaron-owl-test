import React from 'react';
import Participant from './Participant';
import App from './App';
import './ParticipantList.css';

export default function ParticipantList(props){
    return (
        <div className="part-list">
            {props.participants.map((participant) =>
                <Participant 
                    avatar={participant.avatar}
                    name={participant.name}
                    isOnStage={participant.onStage}
                    inSession={participant.inSession}  
                />
            )}
        </div> 
    )
}