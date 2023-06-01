import { useEffect, useState } from "react";
import { getRoleBackend } from "../scripts/backendInteraction";
import { pageView } from "../types/pageView";

// TODO: add the gamemode
function Playing({ setView, room, playerID, isHost, timerDuration }: { setView: any, room: number, playerID: number, isHost: boolean, timerDuration: number }) {
    
    const [role, setRole] = useState<string>('');
    const [name, setName] = useState<string>('');

    useEffect(() => {
        async function fetchRole() {
            const playerRaw = await getRoleBackend(room.toString(), playerID);
            setRole(playerRaw.role);
            setName(playerRaw.name);
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
        </div>
    )
}

export default Playing;