import IGamemode from "../types/IGamemode";
import allGamemodes from "../games/allGamemodes.json";

// get all possible gamemodes from the backend
function getAllGamemodes(): IGamemode[] {
    return allGamemodes;
}

// get all available gamemodes from the backend
function getAvailableGamemodes(playerCount: number): IGamemode[] {
    const availableGamemodes: IGamemode[] = [];
    const allGamemodes: IGamemode[] = getAllGamemodes();
    for (const gamemode of allGamemodes) {
        if (gamemode.allowedPlayers.includes(playerCount)) {
            availableGamemodes.push(gamemode);
        }
    }

    return availableGamemodes;
}

export { getAllGamemodes, getAvailableGamemodes };