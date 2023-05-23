import { useEffect, useState } from "react";
import { pageView } from "../types/pageView";

async function createGame(sheetID: string, numPlayers: number): Promise<number> {
    const url = process.env.REACT_APP_API_URL + "/api/create-game/" + sheetID + "/" + numPlayers.toString();
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    console.log(response.roomID);
    return response.roomID;
}


function HostDetails({ setView, setRoom }: { setView: any, setRoom: any }) {

    const [playerCount, setPlayerCount] = useState<string>('');

    async function startGame() {
        const roomID = await createGame("1", parseInt(playerCount));
        setRoom(roomID);
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