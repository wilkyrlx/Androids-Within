import React, { useState } from 'react';
import { pageView } from './types/pageView';
import Landing from './components/Landing';
import HostDetails from './components/HostDetails';
import JoinDetails from './components/JoinDetails';
import GamemodeSelect from './components/GamemodeSelect';
import Waiting from './components/Waiting';
import Playing from './components/Playing';
import './styles/global.css';

function App() {
    
    const [room, setRoom] = useState<number>(0);
    const [playerID, setPlayerID] = useState<number>(-1);	// playerID is the index of the player in the array of players in the backend
	const [view, setView] = useState<pageView>(pageView.LANDING)	// which page is being displayed

    return (
        <div id="App">
            < button onClick={() => setView(pageView.GAMEMODE_SELECT)}>test</button>
            { view === pageView.LANDING && <Landing setView={setView} /> }
            { view === pageView.HOST_DETAILS && <HostDetails setView={setView} setRoom={setRoom} setPlayerID={setPlayerID} /> }
            { view === pageView.JOIN_DETAILS && <JoinDetails setView={setView} setRoom={setRoom} setPlayerID={setPlayerID} /> }
            { view === pageView.GAMEMODE_SELECT && <GamemodeSelect setView={setView} room={room} /> }
            { view === pageView.WAITING && <Waiting setView={setView} room={room} /> }
            { view === pageView.PLAYING && <Playing setView={setView} room={room} playerID={playerID} /> }
        </div>
    );
}

export default App;
