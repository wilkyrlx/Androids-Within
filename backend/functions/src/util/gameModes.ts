import IGamemode from "../types/IGamemode";

function getAvailableGamemodes(players: number): IGamemode[] {
    const availableGamemodes: IGamemode[] = [];
    const allGamemodes: IGamemode[] = getAllGamemodes();
    for (const gamemode of allGamemodes) {
        if (gamemode.allowedPlayers.includes(players)) {
            availableGamemodes.push(gamemode);
        }
    }

    return availableGamemodes;
}


function getAllGamemodes(): IGamemode[] {
    const allGamemodes = [];
    // TODO: could make this a JSON
    // TODO: put this on frontend to decrease latency
    allGamemodes.push({ code: 1, name: "Sleeper Cells", description: "Sleeper Cells", allowedPlayers: [6, 8, 10, 12] });
    allGamemodes.push({ code: 2, name: "Gemini", description: "Gemini", allowedPlayers: [6, 7, 8, 9, 10, 11, 12] });
    allGamemodes.push({ code: 3, name: "Alone", description: "Alone", allowedPlayers: [5, 6, 7, 8] });
    allGamemodes.push({ code: 4, name: "Extraction", description: "Extraction", allowedPlayers: [6, 7, 8, 9, 10, 11, 12] });
    allGamemodes.push({ code: 5, name: "Double Agent", description: "Double Agent", allowedPlayers: [5, 7, 9, 11] });
    allGamemodes.push({ code: 6, name: "Infiltrator", description: "Infiltrator", allowedPlayers: [5, 6, 7, 8, 9, 10, 11, 12] });
    allGamemodes.push({ code: 7, name: "No Way Out", description: "No Way Out", allowedPlayers: [5, 6, 7, 8, 9, 10, 11, 12] });
    allGamemodes.push({ code: 8, name: "Chain of Command", description: "Chain of Command", allowedPlayers: [6, 7, 8, 9, 10, 11, 12] });
    allGamemodes.push({ code: 9, name: "Rescue", description: "Rescue", allowedPlayers: [5, 6, 7, 8] });
    allGamemodes.push({ code: 10, name: "Double Agent II", description: "Double Agent II", allowedPlayers: [5, 7, 9, 11] });
    allGamemodes.push({ code: 11, name: "Assassin", description: "Assassin", allowedPlayers: [6, 7, 8, 9, 10, 11, 12] });
    allGamemodes.push({ code: 12, name: "Code Talkers", description: "Code Talkers", allowedPlayers: [5, 6, 7, 8] });
    allGamemodes.push({ code: 13, name: "Kill Switch", description: "Kill Switch", allowedPlayers: [5, 6, 7, 8, 9] });
    allGamemodes.push({ code: 14, name: "Self-Aware", description: "Self-Aware", allowedPlayers: [5, 6, 7, 8, 9] });
    allGamemodes.push({ code: 15, name: "Broken", description: "Broken", allowedPlayers: [5, 6, 7, 8, 9] });
    allGamemodes.push({ code: 16, name: "Hunted", description: "Hunted", allowedPlayers: [5, 6, 7, 8, 9] });
    allGamemodes.push({ code: 17, name: "Target X", description: "Target X", allowedPlayers: [5, 6, 7, 8, 9] });
    allGamemodes.push({ code: 18, name: "Renegade", description: "Renegade", allowedPlayers: [5, 6, 7, 8, 9, 10] });
    allGamemodes.push({ code: 19, name: "One Among Us", description: "One Among Us", allowedPlayers: [5, 6, 7, 8] });
    return allGamemodes;
}



export { getAvailableGamemodes, getAllGamemodes };