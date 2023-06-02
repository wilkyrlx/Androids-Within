import { sleeperCells, gemini, alone, extraction, doubleAgent, infiltrator, noWayOut, chainOfCommand, rescue, doubleAgentII, assassin, codeTalkers, killSwitch, selfAware, broken, hunted, targetX, renegade, oneAmongUs } from "../games/gameExports";
import { shuffleArray } from "./IGameRules";
import { Status } from "./status";

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
    status: Status;
    assignments: { [key: string]: string };

    constructor(id: number, sheetID: string, numPlayers: number) {
        this.id = id;
        this.sheetID = sheetID;
        this.players = [];
        this.gameMode = 0;
        this.numPlayers = numPlayers;
        this.status = Status.WAITING_ON_HOST;   
        this.assignments = {};         
    }


    addPlayer(player: number) {
        if (this.players.length >= this.numPlayers) {
            throw new Error("Game room is full");
        }
        this.players.push(player);
    }     

    generateRoles() {

        // generates a random string of letters A onwards for each player
        const array: string[] = [];
        for (let i = 0; i < this.numPlayers; i++) {
            const letter = String.fromCharCode(65 + i);
            array.push(letter);
        }
        const shuffledArray = shuffleArray(array);

        let assignments = {};
        switch (this.gameMode) {
            case 1:
                // Sleeper Cells
                assignments = new sleeperCells(shuffledArray).assignments;
                break;
            case 2:
                // Gemini
                assignments = new gemini(shuffledArray).assignments;
                break;
            case 3:
                // Alone
                assignments = new alone(shuffledArray).assignments;
                break;
            case 4:
                // Extraction
                assignments = new extraction(shuffledArray).assignments;
                break;
            case 5:
                // Double Agent
                assignments = new doubleAgent(shuffledArray).assignments;
                break;
            case 6:
                // Infiltrator
                assignments = new infiltrator(shuffledArray).assignments;
                break;
            case 7:
                // No Way Out
                assignments = new noWayOut(shuffledArray).assignments;
                break;
            case 8:
                // Chain of Command
                assignments = new chainOfCommand(shuffledArray).assignments;
                break;
            case 9:
                // Rescue
                assignments = new rescue(shuffledArray).assignments;
                break;
            case 10:
                // Double Agent II
                assignments = new doubleAgentII(shuffledArray).assignments;
                break;
            case 11:
                // Assassin
                assignments = new assassin(shuffledArray).assignments;
                break;
            case 12:
                // Code Talkers
                assignments = new codeTalkers(shuffledArray).assignments;
                break;
            case 13:
                // Kill Switch
                assignments = new killSwitch(shuffledArray).assignments;
                break;
            case 14:
                // Self Aware
                assignments = new selfAware(shuffledArray).assignments;
                break;
            case 15:
                // Broken
                assignments = new broken(shuffledArray).assignments;
                break;
            case 16:
                // Hunted
                assignments = new hunted(shuffledArray).assignments;
                break;
            case 17:
                // Target X
                assignments = new targetX(shuffledArray).assignments;
                break;
            case 18:
                // Renegade
                assignments = new renegade(shuffledArray).assignments;
                break;
            case 19:
                // One Among Us
                assignments = new oneAmongUs(shuffledArray).assignments;
                break;    
            default:
                console.log("Invalid game mode");
                break;
        }

        this.assignments = assignments;
    
    }

}

export default GameRoom;