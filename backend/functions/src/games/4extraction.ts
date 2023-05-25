import { IGameRules } from "../types/IGameRules";

class extraction implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    assignRoles() {


        // assign roles
        this.assignments[this.players[0]] = "Hostage"; 
        this.assignments[this.players[1]] = "Rescue Team. Target: " + this.players[0];
        this.assignments[this.players[2]] = "Rescue Team. Target: " + this.players[0];
        for (let i = 3; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "Android";
        }
    }

}

export default extraction;