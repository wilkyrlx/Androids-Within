import { pageView } from "../types/pageView"

function RoomCode({ setView, room }: { setView: any, room: number}) {
    return (
        <div id="playing" className="container">
            <p> Roomcode: {room} </p>
            <button onClick={() => setView(pageView.GAMEMODE_SELECT)}>Select Gamemode</button>
        </div>
    )
}

export default RoomCode