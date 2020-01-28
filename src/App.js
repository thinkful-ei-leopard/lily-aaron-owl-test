import React from 'react';
import ParticipantList from './ParticipantList';
import './App.css';
import STORE from './store';

function App(props) {
  return (
    <main className='App'> 
    <ParticipantList participants= {props.store.participants}/>
    </main>
    
  );

  }
export default App;
