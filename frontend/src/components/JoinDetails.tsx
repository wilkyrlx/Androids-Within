import { useState } from "react";
import { pageView } from "../types/pageView";
import { joinGameRoom } from "../utils/dbInteraction";

function JoinDetails({ setView, setRoom, setPlayerID }: { setView: any, setRoom: any, setPlayerID: any }) {

    const [roomCode, setRoomCode] = useState<string>('');
    const [playerIDText, setPlayerIDText] = useState<string>('');

    async function joinGame() {
        const playerID: number = translatePlayerID(playerIDText);
        joinGameRoom(parseInt(roomCode));
        setRoom(roomCode);
        setPlayerID(playerID);
        setView(pageView.WAITING);
    }

    // TODO: error checking
    function translatePlayerID(letter: string) {
        letter = letter.toUpperCase();
        const playerIdNumber: number = letter.charCodeAt(0) - 'A'.charCodeAt(0);
        return playerIdNumber;
    }

    return (
        <div id="join-details" className="container">
            <input id="join-code" type="text" placeholder="Enter Room Code" value={roomCode} onChange={ (ev) => setRoomCode(ev.target.value)} /> 
            <input id="player-id" type="text" placeholder="Enter Player Letter" value={playerIDText} onChange={ (ev) => setPlayerIDText(ev.target.value)}  /> 
            <button  onClick={() => joinGame()}>Join Game</button>
        </div>
    )
}

export default JoinDetails;