import { IGameRules } from "../types/IGameRules";

class gemini implements IGameRules {
    players: number[];
    assignments: { [key: number]: string };

    constructor(players: number[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    assignRoles() {

        // assign roles
        this.assignments[this.players[0]] = "Human";
        this.assignments[this.players[1]] = "Human";
        for (let i = 2; i < this.players.length; i++) {
            let offset = i + 1;
            if (offset == this.players.length) {
                offset = 2;
            }
            this.assignments[this.players[i]] = "Android. Partner: " + this.players[offset];
        }
    }

}

export default gemini;