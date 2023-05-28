import { useState } from "react";
import { pageView } from "../types/pageView";
import { joinGameBackend } from "../scripts/backendInteraction";

function JoinDetails({ setView, setRoom, setPlayerID }: { setView: any, setRoom: any, setPlayerID: any }) {

    const [roomCode, setRoomCode] = useState<string>('');

    async function joinGame() {
        const playerID: number = await joinGameBackend(roomCode);
        setRoom(roomCode);
        setPlayerID(playerID);
        setView(pageView.GAMEMODE_SELECT);
    }

    return (
        <div id="join-details" className="container">
            <input
                id="join-code"
                type="text"
                placeholder="Enter Room Code"
                value={roomCode}
                onChange={ (ev) => setRoomCode(ev.target.value)}
            /> 
            <button className="button" onClick={() => joinGame()}>Join Game</button>
        </div>
    )
}

export default JoinDetails;