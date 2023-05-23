import { pageView } from "../types/pageView";

// Waits for all players to join the game before starting the game
// TODO: add an animation and some count for the number of players joined
// TODO: use websockets to update the number of players joined
function Waiting({ setView }: { setView: any }) {

    return (
        <div id="waiting">
            <p> Waiting for the game to start... </p>
        </div>
    )
}

export default Waiting;