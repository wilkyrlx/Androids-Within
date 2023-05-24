async function createGameBackend(sheetID: string, numPlayers: number): Promise<number> {
    const url = process.env.REACT_APP_API_URL + "/api/create-game/" + sheetID + "/" + numPlayers.toString();
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    // console.log(response.roomID);
    return response.roomID;
}

async function joinGameBackend(roomCode: string): Promise<number> {
    const url = process.env.REACT_APP_API_URL + "/api/join-game/" + roomCode;
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    // console.log(response.playerID + " joined game");
    return response.playerID;
}

export { createGameBackend, joinGameBackend };