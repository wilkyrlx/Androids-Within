import { pageView } from "../types/pageView";
import { useEffect, useState } from "react";
import { checkGameRoomReady } from "../utils/dbInteraction";

// Waits for all players to join the game before starting the game
function Waiting({ setView, room }: { setView: any, room: number}) {

    const [actualPlayers, setActualPlayers] = useState<string>('0');
    const [expectedPlayers, setExpectedPlayers] = useState<string>('0');

    async function checkGameStatus() {
        const gameStatus: any = await checkGameRoomReady(room);
        if (gameStatus.status) {
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
            <p> Waiting for the game to start... </p>
            <p> {actualPlayers} / {expectedPlayers} players joined </p>
        </div>
    )
}

export default Waiting;