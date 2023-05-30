import './styles/global.css';
import React, { useState } from 'react';
import { pageView } from './types/pageView';
import Landing from './components/Landing';
import HostDetails from './components/HostDetails';
import JoinDetails from './components/JoinDetails';
import GamemodeSelect from './components/GamemodeSelect';
import Waiting from './components/Waiting';
import Playing from './components/Playing';
import AllRoles from './components/AllRoles';
import Timer from './components/Timer';

function App() {
    
    const [room, setRoom] = useState<number>(0);
    const [playerID, setPlayerID] = useState<number>(-1);	// playerID is the index of the player in the array of players in the backend
	const [isHost, setHost] = useState<boolean>(false);	    // is the player the host of the game? [true/false]
    const [view, setView] = useState<pageView>(pageView.LANDING)	// which page is being displayed

    return (
        <div id="App">
            { view === pageView.LANDING && <Landing setView={setView} /> }
            { view === pageView.HOST_DETAILS && <HostDetails setView={setView} setRoom={setRoom} setPlayerID={setPlayerID} setHost={setHost} /> }
            { view === pageView.JOIN_DETAILS && <JoinDetails setView={setView} setRoom={setRoom} setPlayerID={setPlayerID} /> }
            { view === pageView.GAMEMODE_SELECT && <GamemodeSelect setView={setView} room={room} isHost={isHost} /> }
            { view === pageView.WAITING && <Waiting setView={setView} room={room} /> }
            { view === pageView.PLAYING && <Playing setView={setView} room={room} playerID={playerID} /> }
            { view === pageView.TIMER && <AllRoles /> }
            { view === pageView.ALL_ROLES && <Timer /> }
        </div>
    );
}

export default App;
