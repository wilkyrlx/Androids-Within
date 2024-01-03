import { RoomStatus } from "./status";


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
    status: RoomStatus;
    assignments: string;

    constructor(id: number, numPlayers: number) {
        this.id = id;
        this.gameMode = 0;
        this.joinedPlayers = 0;
        this.numPlayers = numPlayers;
        this.status = RoomStatus.WAITING_ON_HOST;
        this.assignments = "";
    }
}

export default GameRoom;