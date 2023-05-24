import { useEffect, useState } from "react";
import IGamemode from "../types/IGamemode";

// get all possible gamemodes from the backend
async function getAllGamemodes(): Promise<IGamemode[]> {
    const url = process.env.REACT_APP_API_URL + "/api/get-gamemodes";
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    console.log(response.gamemodes);
    return response.gamemodes;
}

// get all available gamemodes from the backend
async function getAvailableGamemodes(roomID: number): Promise<IGamemode[]> {
    const url = process.env.REACT_APP_API_URL + "/api/get-available-gamemodes/" + roomID.toString();
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    console.log(response.gamemodes);
    return response.gamemodes;
}

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
        </div>
    )
}


export default GamemodeSelect;