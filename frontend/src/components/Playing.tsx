import { useEffect, useState } from "react";
import { pageView } from "../types/pageView";
import databaseManager from "../utils/dbInteraction";
import { set } from "@firebase/database";

// TODO: add the gamemode
function Playing({ setView, room, playerID, isHost, timerDuration }: { setView: any, room: number, playerID: number, isHost: boolean, timerDuration: number }) {
    
    const [role, setRole] = useState<string>('');
    const [name, setName] = useState<string>('');

    useEffect(() => {
        async function fetchRole() {
            const playerRaw = await databaseManager.getRole(room, playerID);
            setName(playerRaw.name);
            setRole(playerRaw.role);
        }

        async function awaitRestart() {
            const response = await databaseManager.waitForStatusChange(room);
            console.log('Status has changed:', response);
            setView(pageView.WAITING);
        }

        fetchRole();
        if (!isHost) {
            awaitRestart();
        }
    }, []);

    const useTimer: boolean = timerDuration > 0;
    return (
        <div id="playing" className="container containerII">
            <p> Game in progress... </p>
            <p> Player {name} </p>
            <p> {role} </p>
            {/* { useTimer && isHost && <button onClick={() => setView(pageView.TIMER)}>Start Timer</button> } */}
            { isHost && <button onClick={() => setView(pageView.ALL_ROLES)}>See All Roles</button> }
        </div>
    )
}

export default Playing;