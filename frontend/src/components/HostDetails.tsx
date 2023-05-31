import { useEffect, useState } from "react";
import { pageView } from "../types/pageView";
import { createGameBackend, joinGameBackend } from "../scripts/backendInteraction";




function HostDetails({ setView, setRoom, setPlayerID, setHost, setPlayerCount }: { setView: any, setRoom: any, setPlayerID: any, setHost: any, setPlayerCount: any }) {

    const [playerCountText, setPlayerCountText] = useState<string>('');

    // Create the game, then join it
    async function startGame() {
        const roomID = await createGameBackend("1", parseInt(playerCountText));     // TODO: sheet code
        const playerID: number = await joinGameBackend(roomID.toString());  
        setRoom(roomID);
        setPlayerID(playerID);
        setHost(true);
        setPlayerCount(parseInt(playerCountText));
        setView(pageView.GAMEMODE_SELECT);
    }

    return (
        <div id="host-details" className="container">
            <input
                id="player-count"
                type="text"
                placeholder="Enter Exact Number of Players"
                value={playerCountText}
                onChange={ (ev) => setPlayerCountText(ev.target.value)}
            />            
            <button className="button" onClick={() => startGame()}>Start Game</button>
        </div>
    )
}

export default HostDetails;