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

async function awaitingPlayersBackend(roomCode: string): Promise<any> {
    console.log("awaitingPlayersBackend");
    const url = process.env.REACT_APP_API_URL + "/api/game-status/" + roomCode;
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    // console.log(response);
    return response;
}

async function getRoleBackend(roomCode: string, playerID: number): Promise<any> {
    const url = process.env.REACT_APP_API_URL + "/api/get-role/" + roomCode + "/" + playerID.toString();
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    // console.log(response);
    return response;
}

export { createGameBackend, joinGameBackend, awaitingPlayersBackend, getRoleBackend };