import { useState } from "react";
import { pageView } from "../types/pageView";
import { createNewGameRoom, joinGameRoom } from "../utils/dbInteraction";




function HostDetails({ setView, setRoom, setPlayerID, setHost, setPlayerCount }: { setView: any, setRoom: any, setPlayerID: any, setHost: any, setPlayerCount: any }) {

    const [playerCountText, setPlayerCountText] = useState<string>('');

    // Create the game, then join it
    async function startGame() {
        const roomID: number = await createNewGameRoom(parseInt(playerCountText));
        const playerID: number = 0; // always player A 
        joinGameRoom(roomID);  
        setRoom(roomID);
        setPlayerID(playerID);
        setHost(true);
        setPlayerCount(parseInt(playerCountText));
        setView(pageView.ROOM_CODE);
    }

    return (
        <div id="host-details" className="container">
            <input id="player-count" type="text" placeholder="Enter Number of Players" value={playerCountText} onChange={ (ev) => setPlayerCountText(ev.target.value)} />            
            <button onClick={() => startGame()}>Create Game</button>
        </div>
    )
}

export default HostDetails;