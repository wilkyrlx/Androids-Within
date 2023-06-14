import { useState } from "react";
import { pageView } from "../types/pageView";
import { joinGameRoom } from "../utils/dbInteraction";

function JoinDetails({ setView, setRoom, setPlayerID }: { setView: any, setRoom: any, setPlayerID: any }) {

    const [roomCode, setRoomCode] = useState<string>('');
    const [playerIDText, setPlayerIDText] = useState<string>('');

    async function joinGame() {
        const playerID: number = translatePlayerID(playerIDText);

        if (playerID === -1) {
            alert("Please enter a valid player ID");
        } else {
            joinGameRoom(parseInt(roomCode));
            setRoom(roomCode);
            setPlayerID(playerID);
            setView(pageView.WAITING);
        }
    }

    // translates the letter to a number
    // Returns -1 if the letter is not a valid player ID, if the string is not a letter, or if the string is empty
    function translatePlayerID(letter: string): number {
        if (letter === '' || letter.length > 1) {
            return -1;
        }

        letter = letter.toUpperCase();
        const playerIdNumber: number = letter.charCodeAt(0) - 'A'.charCodeAt(0);
        
        if (playerIdNumber < 0 || playerIdNumber > 11) {
            return -1;
        }
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