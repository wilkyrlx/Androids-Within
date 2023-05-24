import { useState } from "react";
import { pageView } from "../types/pageView";
import { joinGameBackend } from "../scripts/backendInteraction";

function JoinDetails({ setView, setRoom }: { setView: any, setRoom: any }) {

    const [roomCode, setRoomCode] = useState<string>('');

    async function joinGame() {
        const playerID: number = await joinGameBackend(roomCode);
        setRoom(roomCode);
        setView(pageView.GAMEMODE_SELECT);
    }

    return (
        <div id="join-details">
            <input
                id="join-code"
                type="text"
                placeholder="Enter Room Code"
                value={roomCode}
                onChange={ (ev) => setRoomCode(ev.target.value)}
            /> 
            <button onClick={() => joinGame()}>Join Game</button>
        </div>
    )
}

export default JoinDetails;