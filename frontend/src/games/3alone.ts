import { IGameRules } from "../types/IGameRules";

class alone implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested
    assignRoles() {

        // assign roles
        this.assignments[this.players[0]] = "Either you or Player " + this.players[1] + " is the only Android"; 
        for (let i = 1; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "Either you or Player " + this.players[0] + " is the only Android";
        }
    }

}

export default alone;