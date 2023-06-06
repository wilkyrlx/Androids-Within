import { useEffect, useState } from "react";
import { pageView } from "../types/pageView";
import { getAllRoles, resetStatus } from "../utils/dbInteraction";

function AllRoles({ setView, room }: { setView: any, room: number }) {

    const [roles, setRoles] = useState<string[]>([]);

    useEffect(() => {
        async function fetchRoles() {
            const assignments = await getAllRoles(room);
            const rolesSet = new Set<string>(); // set deduplicates
            Object.keys(assignments).forEach(key => {
                console.log(key, assignments[key]);
                rolesSet.add(`${key}: ${assignments[key]}`);
            });
            const sortedRolesArray = Array.from(rolesSet).sort();   // sort alphabetically
            setRoles(sortedRolesArray);
        }

        fetchRoles();
    }, []);

    function newGame() {
        resetStatus(room);
        setView(pageView.GAMEMODE_SELECT);
    }

    return (
        <div>
            <h1>All Roles</h1>
            <ul>
                {roles.map((role, index) => (
                    <li key={index}>Player: {role}</li>
                ))}
            </ul>
            <button onClick={() => newGame()}>Restart Game</button> 
        </div>
    )
}

export default AllRoles;