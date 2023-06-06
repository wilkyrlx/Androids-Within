import { IGameRules } from "../types/IGameRules";

class gemini implements IGameRules {
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
        this.assignments[this.players[0]] = "You are human and being hunted by androids. Find your human partner.";
        this.assignments[this.players[1]] = "You are human and being hunted by androids. Find your human partner.";
        for (let i = 2; i < this.players.length; i++) {
            let offset = i + 1;
            if (offset == this.players.length) {
                offset = 2;
            }
            this.assignments[this.players[i]] = "You are an android. Find one of the two humans. This player is also an android: " + this.players[offset];
        }
    }

}

export default gemini;