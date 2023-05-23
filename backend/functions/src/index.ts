import * as functions from "firebase-functions";
import express, { Request, Response } from "express";
import GameRoom from "./util/GameRoom";
import Player from "./util/Player";

// TODO: ass express routes to firebase
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const app = express();

// Dictionary of game rooms. Key: room code, Value: room object
const gameRooms: { [key: number]: GameRoom } = {};
let numRooms: number = 0;


app.get('/api/create-game/:sheetID/:gameMode/:numPlayers', (req: Request, res: Response) => {
    const { sheetID, gameMode, numPlayers } = req.params;

    // Check if gameMode and numPlayers
    const gameModeNum = Number(gameMode);
    const numPlayersNum = Number(numPlayers);
    if (isNaN(gameModeNum) || isNaN(numPlayersNum)) {
        res.status(400).json({ error: 'Invalid parameter. Numbers expected.' });
        return;
    }

    // Create a new game room
    const roomID: number = numRooms;    // TODO: better way to generate a roomID, should be a 6 letter code
    const newGameRoom = new GameRoom(roomID, sheetID, gameModeNum, numPlayersNum, "waiting");

    // Add the game room to the shared dictionary
    gameRooms[roomID] = newGameRoom;
    numRooms += 1;

    // Return the roomID
    res.status(200).json({ roomID: roomID });
});

app.get('/api/join-game/:roomID', (req: Request, res: Response) => {
    const { roomID } = req.params;

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

    // Check if game room is full
    const gameRoom = gameRooms[roomIDNum];
    if (gameRoom.players.length >= gameRoom.numPlayers) {
        res.status(400).json({ error: 'Game room is full.' });
        return;
    }

    // Create a new player
    const playerID = gameRoom.players.length;
    const newPlayer: Player = new Player(playerID);

    // Add the player to the game room
    gameRoom.addPlayer(newPlayer);

    // Return the playerID
    res.status(200).json({ playerID: playerID });
});

app.get('/api/get-game/:roomID', (req: Request, res: Response) => {
    const { roomID } = req.params;
    
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

    // Return the game room
    res.status(200).json({ gameRoom: gameRooms[roomIDNum] });
});

exports.app = functions.https.onRequest(app);