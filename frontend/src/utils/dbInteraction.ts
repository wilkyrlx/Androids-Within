import GameRoom from "../types/GameRoom";
import { RoomStatus } from "../types/status";
import database from "../utils/firebase";
import generateRolesX from "./gamemodeSelector";

// TODO: add these to some class or const

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

async function joinGameRoom(roomID: number) {
    const gameRoomsRef = database.ref('gameRooms');
    const snapshot = await gameRoomsRef.once('value');
    const gameRooms = snapshot.val();

    if (roomID in gameRooms) {
        const room: GameRoom = gameRooms[roomID];
        room.joinedPlayers += 1;
        await gameRoomsRef.child(roomID.toString()).set(room);
    } else {
        throw new Error("Game room does not exist");
    }

}

async function overrideStartGameRoom(roomID: number) {
    const gameRoomsRef = database.ref('gameRooms');
    const snapshot = await gameRoomsRef.once('value');
    const gameRooms = snapshot.val();

    if (roomID in gameRooms) {
        const room: GameRoom = gameRooms[roomID];
        room.status = 1;
        await gameRoomsRef.child(roomID.toString()).set(room);
    } else {
        throw new Error("Game room does not exist");
    }

}

// TODO: give this a type
async function getRole(roomID: number, playerID: number): Promise<any> {
    const gameRoomsRef = database.ref('gameRooms');
    const snapshot = await gameRoomsRef.once('value');
    const gameRooms = snapshot.val();

    if (roomID in gameRooms) {
        const room: GameRoom = gameRooms[roomID];
        const letter: string = String.fromCharCode(65 + playerID)
        const role: string = JSON.parse(room.assignments)[letter];
        return { name: letter, role: role };
    } else {
        throw new Error("Game room does not exist");
    }
}

async function generateRoles(roomID: number, gamemode: number) {
    const gameRoomsRef = database.ref('gameRooms');
    const snapshot = await gameRoomsRef.once('value');
    const gameRooms = snapshot.val();

    if (roomID in gameRooms) {
        const room: GameRoom = gameRooms[roomID];
        room.gameMode = gamemode;
        room.assignments = JSON.stringify(generateRolesX(room.numPlayers, gamemode));
        room.status = RoomStatus.WAITING_ON_HOST;   // FIXME: no need to change it, maybe add another status code?
        await gameRoomsRef.child(roomID.toString()).set(room);
    } else {
        throw new Error("Game room does not exist");
    }
}

async function getAllRoles(roomID: number): Promise<any> {
    const gameRoomsRef = database.ref('gameRooms');
    const snapshot = await gameRoomsRef.once('value');
    const gameRooms = snapshot.val();

    if (roomID in gameRooms) {
        const room: GameRoom = gameRooms[roomID];
        return JSON.parse(room.assignments);
    } else {
        throw new Error("Game room does not exist");
    }
}

async function resetStatus(roomID: number) {
    const gameRoomsRef = database.ref('gameRooms');
    const snapshot = await gameRoomsRef.once('value');
    const gameRooms = snapshot.val();

    if (roomID in gameRooms) {
        const room: GameRoom = gameRooms[roomID];
        room.status = RoomStatus.WAITING_ON_HOST;
        await gameRoomsRef.child(roomID.toString()).set(room);
    } else {
        throw new Error("Game room does not exist");
    }
}

// TODO: give this a type
async function checkGameRoomReady(roomID: number): Promise<any> {
    const gameRoomsRef = database.ref('gameRooms');
    const snapshot = await gameRoomsRef.once('value');
    const gameRooms = snapshot.val();

    if (roomID in gameRooms) {
        const room: GameRoom = gameRooms[roomID];
        const retStatus = { status: room.status, joinedPlayers: room.joinedPlayers, numPlayers: room.numPlayers };
        return retStatus;
    } else {
        throw new Error("Game room does not exist");
    }
}



function waitForStatusChange(roomID: number) {
    return new Promise(resolve => {
        const statusRef = database.ref(`gameRooms/${roomID}/status`);
        const listener = statusRef.on('value', snapshot => {
            const newStatus = snapshot.val();
            if (newStatus === RoomStatus.WAITING_ON_HOST) {
                statusRef.off('value', listener); // Remove the listener
                resolve(newStatus);
            }
        });
    });
}
export {
    createNewGameRoom, joinGameRoom, checkGameRoomReady, getRole,
    generateRoles, getAllRoles, resetStatus,
    waitForStatusChange, overrideStartGameRoom
};