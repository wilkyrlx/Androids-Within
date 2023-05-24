import { useEffect, useState } from "react";
import { getRoleBackend } from "../scripts/backendInteraction";

function Playing({ setView, room, playerID }: { setView: any, room: number, playerID: number }) {
    
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
    
    return (
        <div id="playing">
            <p> Playing the game </p>
            <p> Player ID: {playerID} </p>
            <p> Name: {name} </p>
            <p> Role: {role} </p>
        </div>
    )
}

export default Playing;