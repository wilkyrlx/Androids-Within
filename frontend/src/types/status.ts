enum Status {
    WAITING_ON_HOST,    // 0
    WAITING,            // 1
}

export { Status }

/*
    Gameroom starts with WAITING_ON_HOST
    switches to WAITING when gamemode is selected
    switches to READY when status is WAITING and their are the correct number of players
*/