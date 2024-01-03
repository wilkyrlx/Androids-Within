enum RoomStatus {
    WAITING_ON_HOST,    // 0
    READY,            // 1
}

export { RoomStatus }

/*
    Gameroom starts with WAITING_ON_HOST
    switches to WAITING when gamemode is selected
    switches to READY when status is WAITING and their are the correct number of players
*/