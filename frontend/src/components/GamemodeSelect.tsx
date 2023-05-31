import { useEffect, useState } from "react";
import IGamemode from "../types/IGamemode";
import { getAllGamemodes, getAvailableGamemodes } from "../scripts/backendGamemodes";
import { pageView } from "../types/pageView";
import { setGamemodeBackend } from "../scripts/backendInteraction";



function GamemodeSelect({ setView, room, playerCount, setDuration }: { setView: any, room: number, playerCount: number, setDuration: any }) {

    const [gamemodes, setGamemodes] = useState<IGamemode[]>([]);
    const [availableGamemodesID, setAvailableGamemodesID] = useState<number[]>([]);
    const [selectedGamemode, setSelectedGamemode] = useState<IGamemode | null>(null);

    useEffect(() => {
        function fetchGamemodes() {
            const gamemodes = getAllGamemodes();
            setGamemodes(gamemodes);
        }
        function fetchAvailableGamemodes() {
            const availableGamemodes = getAvailableGamemodes(playerCount);
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
            return "available-gamemode gamemode";
        } else {
            return "unavailable-gamemode gamemode";
        }
    }

    function startGame() {
        console.log("starting game");
        if (selectedGamemode) {
            console.log("starting game with gamemode " + selectedGamemode.name);
            setGamemodeBackend(room.toString(), selectedGamemode.code);
            setDuration(selectedGamemode.timer);
            setView(pageView.WAITING);
        } else {
            console.log("no gamemode selected");
            // TODO: show something to the user
        }
    }

    function updateGamemode(gamemode: IGamemode) {
        setSelectedGamemode(gamemode);
        const startGameBtn: HTMLButtonElement | null = document.getElementById("start-game-btn") as HTMLButtonElement;
        if (startGameBtn) {
            startGameBtn.disabled = false;
        }
    }

    return (
        <div id="gamemode-select">
            <p> select your gamemode </p>
            <ul>
                {gamemodes.map((gamemode: IGamemode) => (
                    <li 
                    key={gamemode.code} 
                    className={availableGamemodeClass(gamemode)} 
                    onClick={() => setSelectedGamemode(gamemode)}>
                        {gamemode.name}
                    </li>
                ))}
            </ul>
            
            <button id="start-game-btn" onClick={() => startGame()}>Start Game</button>
        </div>
    )
}


export default GamemodeSelect;