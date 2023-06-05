import { useEffect, useState } from "react";
import IGamemode from "../types/IGamemode";
import { getAllGamemodes, getAvailableGamemodes } from "../utils/gamemodesList";
import { pageView } from "../types/pageView";



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
        }
    }

    function updateGamemode(gamemode: IGamemode) {
        // get rid of the selected gamemode class from the previous gamemode
        if (selectedGamemode) {
            const selectedGamemodeElement: HTMLElement | null = document.getElementById(selectedGamemode.code.toString());
            if (selectedGamemodeElement) {
                selectedGamemodeElement.classList.remove("selected-gamemode");
            }
        }

        setSelectedGamemode(gamemode);

        // add the selected gamemode class to the new gamemode
        const selectedGamemodeElement: HTMLElement | null = document.getElementById(gamemode.code.toString());
        if (selectedGamemodeElement) {
            selectedGamemodeElement.classList.add("selected-gamemode");
        }
        const startGameBtn: HTMLButtonElement = document.getElementById("start-game-btn") as HTMLButtonElement;
        startGameBtn.classList.remove("btn-disabled");
    }

    return (
        <div id="gamemode-select" className="container">
            <p> select your gamemode </p>
            <ul>
                {gamemodes.map((gamemode: IGamemode) => (
                    <li 
                    key={gamemode.code} 
                    id={gamemode.code.toString()}
                    className={availableGamemodeClass(gamemode)} 
                    onClick={() => updateGamemode(gamemode)}>
                        {gamemode.name}
                    </li>
                ))}
            </ul>
            
            <button id="start-game-btn" className="btn-disabled" onClick={() => startGame()}>Start Game</button>
        </div>
    )
}


export default GamemodeSelect;