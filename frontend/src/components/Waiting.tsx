import { pageView } from "../types/pageView";
import { useEffect, useState } from "react";
import { checkGameRoomReady, overrideStartGameRoom } from "../utils/dbInteraction";
import { RoomStatus } from "../types/status";

// Waits for all players to join the game before starting the game
function Waiting({ setView, room, isHost }: { setView: any, room: number, isHost: boolean }) {

    const [actualPlayers, setActualPlayers] = useState<string>('0');
    const [expectedPlayers, setExpectedPlayers] = useState<string>('0');

    async function checkGameStatus() {
        const gameStatus: any = await checkGameRoomReady(room);
        if (gameStatus.status === RoomStatus.READY) {
            setView(pageView.PLAYING);
        } else {
            setActualPlayers(gameStatus.joinedPlayers);
            setExpectedPlayers(gameStatus.numPlayers);
            setTimeout(checkGameStatus, 3000);      // TODO: this is currently a very slow implementation. Use firestore instead
        }
    }

    useEffect(() => {
        checkGameStatus();
    }, []);

    return (
        <div id="waiting" className="container">
            <p> Room {room}: waiting for the game to start... </p>
            <p> {actualPlayers} / {expectedPlayers} players joined </p>
            { isHost && <button onClick={() => overrideStartGameRoom(room)}>(OVERRIDE) Start Game</button> }
        </div>
    )
}

export default Waiting;