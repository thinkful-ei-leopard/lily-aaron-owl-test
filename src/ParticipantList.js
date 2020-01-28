import React from 'react';
import Participant from './Participant';

const ParticipantList = (props) => {
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