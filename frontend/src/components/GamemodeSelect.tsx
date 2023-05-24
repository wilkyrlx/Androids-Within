import { useEffect, useState } from "react";
import IGamemode from "../types/IGamemode";
import { getAllGamemodes, getAvailableGamemodes } from "../scripts/backendGamemodes";
import { pageView } from "../types/pageView";



function GamemodeSelect({ setView, room }: { setView: any, room: number }) {

    const [gamemodes, setGamemodes] = useState<IGamemode[]>([]);
    const [availableGamemodesID, setAvailableGamemodesID] = useState<number[]>([]);

    useEffect(() => {
        async function fetchGamemodes() {
            const gamemodes = await getAllGamemodes();
            setGamemodes(gamemodes);
        }
        async function fetchAvailableGamemodes() {
            const availableGamemodes = await getAvailableGamemodes(room);
            const tempAvailableGamemodesID: number[] = [];
            for (let i = 0; i < availableGamemodes.length; i++) {
                tempAvailableGamemodesID.push(availableGamemodes[i].code);
            }
            setAvailableGamemodesID(tempAvailableGamemodesID);
        }

        fetchAvailableGamemodes();
        fetchGamemodes();
    }, []);

    // conditional styling for gamemodes, only available gamemodes are clickable
    function availableGamemodeClass(gamemode: IGamemode): string {
        if (availableGamemodesID.includes(gamemode.code)) {
            console.log("available gamemode");
            return "available-gamemode";
        } else {
            return "";
        }
    }

    return (
        <div id="gamemode-select">
            <p> select your gamemode </p>
            <ul>
                {gamemodes.map((gamemode: IGamemode) => (
                    <li key={gamemode.code} className={availableGamemodeClass(gamemode)}>{gamemode.name}</li>
                ))}
            </ul>
            <button onClick={() => setView(pageView.WAITING)}>start game</button>
        </div>
    )
}


export default GamemodeSelect;