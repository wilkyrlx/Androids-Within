import IGamemode from "../types/IGamemode";

// get all possible gamemodes from the backend
async function getAllGamemodes(): Promise<IGamemode[]> {
    const url = process.env.REACT_APP_API_URL + "/api/get-gamemodes";
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    // console.log(response.gamemodes);
    return response.gamemodes;
}

// get all available gamemodes from the backend
async function getAvailableGamemodes(roomID: number): Promise<IGamemode[]> {
    const url = process.env.REACT_APP_API_URL + "/api/get-available-gamemodes/" + roomID.toString();
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    // console.log(response.gamemodes);
    return response.gamemodes;
}

export { getAllGamemodes, getAvailableGamemodes };