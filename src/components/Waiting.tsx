import { pageView } from "../types/pageView";
import { useEffect, useState } from "react";
import databaseManager from "../utils/databaseManager";
import { RoomStatus } from "../types/status";
import playerNameTranslator from "../utils/playerNameTranslator";


// Waits for all players to join the game before starting the game
function Waiting({ setView, room, isHost, playerID }: { setView: any, room: number, isHost: boolean, playerID: number }) {

    const [actualPlayers, setActualPlayers] = useState<string>('0');
    const [expectedPlayers, setExpectedPlayers] = useState<string>('0');

    async function checkGameStatus() {
        const gameStatus: any = await databaseManager.checkGameRoomReady(room);
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
            <p> You are player {playerNameTranslator.idToName(playerID)} </p>
            {/* TODO: add player list here */}
            { isHost && <button onClick={() => databaseManager.overrideStartGameRoom(room)}>Start Game</button> }
        </div>
    )
}

export default Waiting;