import gemini from "../games/2gemini";
import sleeperCells from "../games/1sleeperCells";
import { shuffleArray } from "../types/IGameRules";
import Player from "./Player";

/**
 * Represents a game room
 * 
 * @param id - The room code
 * @param sheetID - The Google Sheet ID associated with the game room
 * @param players - The players in the game room. Initially empty
 * @param gameMode - The game mode of the game room, represented as a number. Initially 0 (waiting)
 * @param numPlayers - The exact number of players in the game room
 * @param status - The status of the game room
 */
class GameRoom {
    id: number;
    sheetID: string;
    players: number[];
    gameMode: number;
    numPlayers: number;     
    status: string;
    assignments: { [key: number]: string };

    constructor(id: number, sheetID: string, numPlayers: number, status: string) {
        this.id = id;
        this.sheetID = sheetID;
        this.players = [];
        this.gameMode = 0;
        this.numPlayers = numPlayers;
        this.status = status;   
        this.assignments = {};         
    }


    addPlayer(player: number) {
        if (this.players.length >= this.numPlayers) {
            throw new Error("Game room is full");
        }
        this.players.push(player);
    }   

    // FIXME: untested, unused
    removePlayer(player: number) {
        this.players = this.players.filter(p => p !== player);
    }   

    generateRoles() {
        const array = [];
        for (let i = 1; i <= this.numPlayers; i++) {
            array.push(i);
        }
    
        const shuffledArray = shuffleArray(array);
        let assignments = {};
        switch (this.gameMode) {
            case 1:
                assignments = new sleeperCells(shuffledArray).assignments;
                break;
            case 2:
                // Gemini
                assignments = new gemini(shuffledArray).assignments;
                break;
            case 3:
                // Alone
                assignments = new gemini(shuffledArray).assignments;
                break;
    
            default:
                console.log("Invalid game mode");
                break;
        }

        this.assignments = assignments;
    
    }

}

export default GameRoom;