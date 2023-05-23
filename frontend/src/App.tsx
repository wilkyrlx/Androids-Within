import React, { useState } from 'react';
import { pageView } from './types/pageView';
import Landing from './components/Landing';
import HostDetails from './components/HostDetails';
import JoinDetails from './components/JoinDetails';

function App() {
    
    const [room, setRoom] = useState<number>(0);
	const [view, setView] = useState<pageView>(pageView.LANDING)	// which page is being displayed

    return (
        <div id="App">
            < button onClick={() => setView(pageView.LANDING)}>Home</button>
            { view === pageView.LANDING && <Landing setView={setView} /> }
            { view === pageView.HOST_DETAILS && <HostDetails setView={setView} /> }
            { view === pageView.JOIN_DETAILS && <JoinDetails setView={setView} /> }
        </div>
    );
}

export default App;
