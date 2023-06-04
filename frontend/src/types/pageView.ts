/**
 * Enum corresponding to which view is visible
 * 
 * Landing: The landing page
 * HostDetails: The page where the host enters the number of players (and potentially the spreadsheet ID)
 * GameModeSelect: The page where the host selects the game mode. Guests can still see this, but won't be able to select anything
 * JoinDetails: The page where the guest enters the host code
 * Waiting: The page where the host and guests wait for the game to start (all players must join) 
 * Playing: The page where the host and guests play the game
 */
enum pageView {
    LANDING,    
    HOST_DETAILS,
    ROOM_CODE,
    GAMEMODE_SELECT,
    JOIN_DETAILS,
    WAITING,    
    PLAYING,
    TIMER,
    ALL_ROLES,
}

export { pageView }

/*
    Flow diagram for pageView states:

               HOST_DETAILS -> ROOM_CODE -> GAMEMODE_SELECT                           TIMER (if necessary) -> ALL_ROLES -> (GAMEMODE_SELECT)
            /                                               \                        /                                    
    LANDING                                                     -> WAITING -> PLAYING  
            \                                               /                        \
               JOIN_DETAILS ---------------------------->                             WAITING 
*/