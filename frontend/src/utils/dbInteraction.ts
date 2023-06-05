import GameRoom from "../types/GameRoom";
import database from "../utils/firebase";


// Create a new game room entry
async function createNewGameRoom(numPlayers: number): Promise<number> {
    const gameRoomsRef = database.ref('gameRooms');

    // Get the count of existing game rooms
    const snapshot = await gameRoomsRef.once('value');
    const count = snapshot.numChildren();

    // Create a new game room with the assigned ID and number of players
    const newGameRoom = new GameRoom(count, numPlayers);
    await gameRoomsRef.child(count.toString()).set(newGameRoom);

    return count;
}

async function joinGameRoom(roomID: string): Promise<number> {
    const gameRoomsRef = database.ref('gameRooms');
    const snapshot = await gameRoomsRef.once('value');
    const gameRooms = snapshot.val();

    if (roomID in gameRooms) {
        const room: GameRoom = gameRooms[roomID];
        const playerID = room.joinedPlayers;
        room.joinedPlayers += 1;
        await gameRoomsRef.child(roomID.toString()).set(room);
        return playerID;
    } else {
        throw new Error("Game room does not exist");
    }

}

export { createNewGameRoom, joinGameRoom };