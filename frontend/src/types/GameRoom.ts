import { sleeperCells, gemini, alone, extraction, doubleAgent, infiltrator, noWayOut, chainOfCommand, rescue, doubleAgentII, assassin, codeTalkers, killSwitch, selfAware, broken, hunted, targetX, renegade, oneAmongUs } from "../games/gameExports";
import database from "../utils/firebase";
import { shuffleArray } from "./IGameRules";
import { Status } from "./status";

// FIXME: this class is a dumpsterfire now

/**
 * Represents a game room
 * 
 * @param id - The room code
 * @param sheetID - The Google Sheet ID associated with the game room
 * @param gameMode - The game mode of the game room, represented as a number. Initially 0 (waiting)
 * @param joinedPlayers - The number of players that have joined the game room
 * @param numPlayers - The exact number of players in the game room
 * @param status - The status of the game room
 */
class GameRoom {
    id: number;
    gameMode: number;
    joinedPlayers: number;
    numPlayers: number;
    status: Status;
    assignments: string;

    constructor(id: number, numPlayers: number) {
        this.id = id;
        this.gameMode = 0;
        this.joinedPlayers = 0;
        this.numPlayers = numPlayers;
        this.status = Status.WAITING_ON_HOST;
        this.assignments = "";
    }


}

export default GameRoom;