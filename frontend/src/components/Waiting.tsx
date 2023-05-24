import { stat } from "fs";
import { awaitingPlayersBackend } from "../scripts/backendInteraction";
import { pageView } from "../types/pageView";
import { useEffect, useState } from "react";

// Waits for all players to join the game before starting the game
// TODO: add an animation and some count for the number of players joined
// TODO: use websockets to update the number of players joined
function Waiting({ setView, room }: { setView: any, room: number}) {

    const [actualPlayers, setActualPlayers] = useState<string>('0');
    const [expectedPlayers, setExpectedPlayers] = useState<string>('0');

    async function checkGameStatus() {
        console.log("checking game status");
        const gameStatus: any = await awaitingPlayersBackend(room.toString());
        if (gameStatus.status === "ready") {
            setView(pageView.PLAYING);
        } else {
            setActualPlayers(gameStatus.actualPlayers);
            setExpectedPlayers(gameStatus.expectedPlayers);
            setTimeout(checkGameStatus, 3000);      // TODO: this is currently a very slow implementation. Use websockets instead
        }
    }

    useEffect(() => {
        checkGameStatus();
    }, []);

    return (
        <div id="waiting">
            <p> Waiting for the game to start... </p>
            <p> {actualPlayers} / {expectedPlayers} players joined </p>
        </div>
    )
}

export default Waiting;