import * as functions from "firebase-functions";
import express, { Request, Response } from "express";
import GameRoom from "./util/GameRoom";
import Player from "./util/Player";
import { getAvailableGamemodes, getAllGamemodes } from "./util/gameModes";

// TODO: remove this endpoint before production
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const app = express();

// Helper function to check if roomID is valid, returns roomID as a number
function isValidRoom(roomID: string, res: Response) {
    // Check if roomID is a number
    const roomIDNum = Number(roomID);
    if (isNaN(roomIDNum)) {
        res.status(400).json({ error: 'Invalid parameter. Numbers expected.' });
        return;
    }

    // Check if roomID exists
    if (!(roomIDNum in gameRooms)) {
        res.status(400).json({ error: 'Invalid roomID.' });
        return;
    }

    return roomIDNum;
}

// Dictionary of game rooms. Key: room code, Value: room object
const gameRooms: { [key: number]: GameRoom } = {};
let numRooms: number = 0;

/** create-game endpoint
 * 
 * @param sheetID - The Google Sheet ID associated with the game room
 * @param numPlayers - The exact number of players in the game room
 */
app.get('/api/create-game/:sheetID/:numPlayers', (req: Request, res: Response) => {
    const { sheetID, numPlayers } = req.params;

    // Check if gameMode and numPlayers
    const numPlayersNum = Number(numPlayers);
    if (isNaN(numPlayersNum)) {
        res.status(400).json({ error: 'Invalid parameter. Numbers expected.' });
        return;
    }

    // Create a new game room
    const roomID: number = numRooms;    // TODO: better way to generate a roomID, should be a 6 letter code
    const newGameRoom = new GameRoom(roomID, sheetID, numPlayersNum, "waiting");

    // Add the game room to the shared dictionary
    gameRooms[roomID] = newGameRoom;
    numRooms += 1;

    // Return the roomID
    res.status(200).json({ roomID: roomID });
});

/** join-game endpoint
 * joins a game that has already been created, given a roomID. Returns an error 
 * if the roomID is invalid or if the game room is full. Assigns the player an ID
 * based on their position in the 'players' array.
 * 
 * @param roomID - The room code
 */
app.get('/api/join-game/:roomID', (req: Request, res: Response) => {
    const { roomID } = req.params;

    const roomIDNum: number = isValidRoom(roomID, res) as number;

    // Check if game room is full
    const gameRoom = gameRooms[roomIDNum];
    if (gameRoom.players.length >= gameRoom.numPlayers) {
        res.status(400).json({ error: 'Game room is full.' });
        return;
    }

    // Create a new player
    const playerID = gameRoom.players.length;   // TODO: in the future, playerID could be chosen by the player
    const newPlayer: Player = new Player(playerID);

    // Add the player to the game room
    gameRoom.addPlayer(newPlayer);

    // Return the playerID
    res.status(200).json({ playerID: playerID });
});

// get-game endpoint, returns the game room object. DEVELOPER ONLY ENDPOINT
// TODO: remove this endpoint before production
app.get('/api/get-game/:roomID', (req: Request, res: Response) => {
    const { roomID } = req.params;
    
    const roomIDNum: number = isValidRoom(roomID, res) as number;

    // Return the game room
    res.status(200).json({ gameRoom: gameRooms[roomIDNum] });
});

/** get-gamemodes endpoint, returns list of all gamemodes and their descriptions
 * NOTE: this is a list of all gamemodes, including ones that may not be available
 * for the current number of players
*/
app.get('/api/get-gamemodes', (req: Request, res: Response) => {
    const gamemodes = getAllGamemodes();

    res.status(200).json({ gamemodes: gamemodes });
});

/** get-available-gamemodes endpoint, returns list of possible gamemodes for a given room */
app.get('/api/get-available-gamemodes/:roomID', (req: Request, res: Response) => {
    const { roomID } = req.params;

    const roomIDNum: number = isValidRoom(roomID, res) as number;

    // return available gamemodes for the game room
    const players: number = gameRooms[roomIDNum].numPlayers;
    const availableGamemodes = getAvailableGamemodes(players);

    res.status(200).json({ availableGamemodes: availableGamemodes });

});






/** set-gamemode endpoint, sets the gamemode of the game room */
app.get('/api/set-gamemode/:roomID/:gamemode', (req: Request, res: Response) => {
    const { roomID, gamemode } = req.params;
    
    // Check if roomID and gamemode is a number
    const roomIDNum = Number(roomID);
    const gamemodeNum = Number(gamemode);
    if (isNaN(roomIDNum) || isNaN(gamemodeNum)) {
        res.status(400).json({ error: 'Invalid parameter. Numbers expected.' });
        return;
    }

    // Check if roomID exists
    if (!(roomIDNum in gameRooms)) {
        res.status(400).json({ error: 'Invalid roomID.' });
        return;
    }

    // set gamemode
    gameRooms[roomIDNum].gameMode = gamemodeNum;

    // Return the game room
    res.status(200).json({ gameRoom: gameRooms[roomIDNum] });
});






exports.app = functions.https.onRequest(app);