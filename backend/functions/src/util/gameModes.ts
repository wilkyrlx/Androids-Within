
// TODO: fix this entire file, right now gamemodes are just hard coded

function getAvailableGamemodes(players: number): number[] {
    const availableGamemodes = [];
    if (players >= 4) {
        availableGamemodes.push(1);
    }
    if (players >= 6) {
        availableGamemodes.push(2);
    }
    if (players < 5) {
        availableGamemodes.push(3);
    }
    return availableGamemodes;
}

function getAllGamemodes(): number[] {
    const allGamemodes = [];
    allGamemodes.push(1);
    allGamemodes.push(2);
    allGamemodes.push(3);
    allGamemodes.push(4);
    allGamemodes.push(5);
    allGamemodes.push(6);
    allGamemodes.push(7);
    allGamemodes.push(8);
    allGamemodes.push(9);
    allGamemodes.push(10);
    allGamemodes.push(11);
    allGamemodes.push(12);
    allGamemodes.push(13);
    allGamemodes.push(14);
    allGamemodes.push(15);
    allGamemodes.push(16);
    allGamemodes.push(17);
    allGamemodes.push(18);
    allGamemodes.push(19);
    return allGamemodes;
}
// gamemodes.push({ gamemode: 1, description: "Sleeper Cells" });
// gamemodes.push({ gamemode: 2, description: "Gemini" });

export { getAvailableGamemodes, getAllGamemodes };