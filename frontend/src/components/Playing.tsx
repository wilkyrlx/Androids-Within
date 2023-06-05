import { useEffect, useState } from "react";
import { pageView } from "../types/pageView";
import { getRole } from "../utils/dbInteraction";

// TODO: add the gamemode
function Playing({ setView, room, playerID, isHost, timerDuration }: { setView: any, room: number, playerID: number, isHost: boolean, timerDuration: number }) {
    
    const [role, setRole] = useState<string>('');
    const [name, setName] = useState<string>('');

    useEffect(() => {
        async function fetchRole() {
            const playerRaw = await getRole(room, playerID);
            setName(playerRaw.name);
            setRole(playerRaw.role);
        }

        fetchRole();
    }, []);

    const useTimer: boolean = timerDuration > 0;
    
    return (
        <div id="playing" className="container">
            <p> Playing the game </p>
            <p> Name: {name} </p>
            <p> Role: {role} </p>
            { useTimer && isHost && <button onClick={() => setView(pageView.TIMER)}>Start Timer</button> }
            { !useTimer && isHost && <button onClick={() => setView(pageView.ALL_ROLES)}>See All Roles</button> }
            { !isHost && <button onClick={() => setView(pageView.WAITING)}>Rejoin Lobby</button> }
        </div>
    )
}

export default Playing;