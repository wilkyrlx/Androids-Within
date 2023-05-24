import { useEffect, useState } from "react";
import { pageView } from "../types/pageView";
import { createGameBackend, joinGameBackend } from "../scripts/backendInteraction";




function HostDetails({ setView, setRoom, setPlayerID }: { setView: any, setRoom: any, setPlayerID: any }) {

    const [playerCount, setPlayerCount] = useState<string>('');

    // Create the game, then join it
    async function startGame() {
        const roomID = await createGameBackend("1", parseInt(playerCount));     // TODO: sheet code
        const playerID: number = await joinGameBackend(roomID.toString());  
        setRoom(roomID);
        setPlayerID(playerID);
        setView(pageView.GAMEMODE_SELECT);
    }

    return (
        <div id="host-details">
            <input
                id="player-count"
                type="text"
                placeholder="Enter Exact Number of Players"
                value={playerCount}
                onChange={ (ev) => setPlayerCount(ev.target.value)}
            />            
            <button onClick={() => startGame()}>Start Game</button>
        </div>
    )
}

export default HostDetails;