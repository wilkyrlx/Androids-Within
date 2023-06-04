import { useEffect, useState } from "react";
import { pageView } from "../types/pageView";
import { createGameBackend, joinGameBackend } from "../utils/backendInteraction";




function HostDetails({ setView, setRoom, setPlayerID, setHost, setPlayerCount }: { setView: any, setRoom: any, setPlayerID: any, setHost: any, setPlayerCount: any }) {

    const [playerCountText, setPlayerCountText] = useState<string>('');

    // Create the game, then join it
    async function startGame() {
        const roomID = await createGameBackend("UNUSED", parseInt(playerCountText));     // TODO: remove sheet code
        const playerID: number = await joinGameBackend(roomID.toString());  
        setRoom(roomID);
        setPlayerID(playerID);
        setHost(true);
        setPlayerCount(parseInt(playerCountText));
        setView(pageView.ROOM_CODE);
    }

    return (
        <div id="host-details" className="container">
            <input
                id="player-count"
                type="text"
                placeholder="Enter Number of Players"
                value={playerCountText}
                onChange={ (ev) => setPlayerCountText(ev.target.value)}
            />            
            <button onClick={() => startGame()}>Create Game</button>
        </div>
    )
}

export default HostDetails;