import { IGameRules } from "../types/IGameRules";

class noWayOut implements IGameRules {
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
        this.assignments[this.players[0]] = "Human";
        this.assignments[this.players[1]] = "Lead android. Android below: " + this.players[2];
        for (let i = 2; i < this.players.length - 1; i++) {
            this.assignments[this.players[i]] = "Android. Android below: " + this.players[i+1];
        }
        this.assignments[this.players[this.players.length - 1]] = "Last android";
    }

}

export default noWayOut;