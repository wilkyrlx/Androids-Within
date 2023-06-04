// TODO: implement better error handling and try/catch


async function createGameBackend(sheetID: string, numPlayers: number): Promise<number> {
    const url = process.env.REACT_APP_API_URL + "/api/create-game/" + sheetID + "/" + numPlayers.toString();
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    return response.roomID;
}

async function joinGameBackend(roomCode: string): Promise<number> {
    const url = process.env.REACT_APP_API_URL + "/api/join-game/" + roomCode;
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    return response.playerID;
}

async function awaitingPlayersBackend(roomCode: string): Promise<any> {
    console.log("awaitingPlayersBackend");
    const url = process.env.REACT_APP_API_URL + "/api/game-status/" + roomCode;
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    return response;
}

// Called when allRoles loads
async function resetStatusBackend(roomCode: string): Promise<any> {
    const url = process.env.REACT_APP_API_URL + "/api/reset-status/" + roomCode;
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    return response;
}


// TODO: clean this up and better document
async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getRoleBackend(roomCode: string, playerID: number): Promise<any> {
    const url = process.env.REACT_APP_API_URL + "/api/get-role/" + roomCode + "/" + playerID.toString();
    const rawResponse = await fetch(url);

    try {
        const response = await rawResponse.json();
        return response;
    } catch (error) {
        if (rawResponse.status === 400) {
            // Retry after 5 seconds
            await delay(3000);
            return getRoleBackend(roomCode, playerID);
        }
        throw error;
    }
}


async function getAllRolesBackend(roomCode: string): Promise<any> {
    const url = process.env.REACT_APP_API_URL + "/api/get-all-roles/" + roomCode;
    const rawResponse = await fetch(url);

    try {
        const response = await rawResponse.json();
        return response;
    } catch (error) {
        if (rawResponse.status === 400) {
            // Retry after 5 seconds
            await delay(3000);
            return getAllRolesBackend(roomCode);
        }
        throw error;
    }
}

async function setGamemodeBackend(roomCode: string, gamemode: number): Promise<any> {
    const url = process.env.REACT_APP_API_URL + "/api/set-gamemode/" + roomCode + "/" + gamemode.toString();
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    return response;
}


export { createGameBackend, joinGameBackend, awaitingPlayersBackend, resetStatusBackend, getRoleBackend, getAllRolesBackend, setGamemodeBackend };