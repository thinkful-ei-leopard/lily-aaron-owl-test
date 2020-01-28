import React from 'react';
import ReactDOM from 'react-DOM';
// import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';


//Smoke test
it('participantList renders without crashing', () =>{
  const div = document.createElement('div');

  ReactDOM.render(
    <ParticipantList
      participants ={[
        {name: 'Lily B', 
        avatar:'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1', 
        inSession: true, 
        onStage: true}
      ]}
    />, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});