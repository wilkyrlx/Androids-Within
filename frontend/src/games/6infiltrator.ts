import { IGameRules } from "../types/IGameRules";

class infiltrator implements IGameRules {
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
        this.assignments[this.players[0]] = "Infiltrator";
        this.assignments[this.players[1]] = "Android. Your or Following is leader: " + this.players[2];

        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "Android. Your or Following is leader: " + this.players[1];
        }
    }

}

export default infiltrator;