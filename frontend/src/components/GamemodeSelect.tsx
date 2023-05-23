import { useEffect, useState } from "react";

// get all possible gamemodes from the backend
async function getAllGamemodes(): Promise<any[]> {
    const url = process.env.REACT_APP_API_URL + "/api/get-gamemodes";
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    console.log(response.gamemodes);
    return response.gamemodes;
}

// get all available gamemodes from the backend
async function getAvailableGamemodes(roomID: number): Promise<any[]> {
    const url = process.env.REACT_APP_API_URL + "/api/get-available-gamemodes/" + roomID.toString();
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    console.log(response.gamemodes);
    return response.gamemodes;
}

function GamemodeSelect({ setView, room }: { setView: any, room: number }) {

    const [gamemodes, setGamemodes] = useState<any[]>([]);
    const [availableGamemodes, setAvailableGamemodes] = useState<any[]>([]);

    useEffect(() => {
        async function fetchGamemodes() {
            const gamemodes = await getAllGamemodes();
            setGamemodes(gamemodes);
        }
        async function fetchAvailableGamemodes() {
            const availableGamemodes = await getAvailableGamemodes(room);
            setAvailableGamemodes(availableGamemodes);
        }

        fetchGamemodes();
        fetchAvailableGamemodes();
    }, []);


    return (
        <div id="gamemode-select">
            <p> select your gamemode </p>
            <ul>
                {gamemodes.map((gamemode: any) => (
                    <li key={gamemode}>{gamemode}</li>
                ))}
            </ul>
        </div>
    )
}

export default GamemodeSelect;