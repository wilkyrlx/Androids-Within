import { IGameRules } from "../types/IGameRules";

class alone implements IGameRules {
    players: number[];
    assignments: { [key: number]: string };

    constructor(players: number[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    assignRoles() {

        const androidsCount = this.players.length - 2;

        // assign roles
        this.assignments[this.players[0]] = "Target: " + this.players[1]; 
        for (let i = 1; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "Target: " + this.players[0];
        }
    }

}

export default alone;