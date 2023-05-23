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
    players: Player[];
    gameMode: number;
    numPlayers: number;     
    status: string;

    constructor(id: number, sheetID: string, numPlayers: number, status: string) {
        this.id = id;
        this.sheetID = sheetID;
        this.players = [];
        this.gameMode = 0;
        this.numPlayers = numPlayers;
        this.status = status;            
    }


    addPlayer(player: Player) {
        if (this.players.length >= this.numPlayers) {
            throw new Error("Game room is full");
        }
        this.players.push(player);
    }   

    removePlayer(player: Player) {
        this.players = this.players.filter(p => p.id !== player.id);
    }   

}

export default GameRoom;