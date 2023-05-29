import { IGameRules } from "../types/IGameRules";

class selfAware implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: ready for testing
    assignRoles() {

        // assign roles
        this.assignments[this.players[0]] = 'Android. Target: ' + this.players[1];  // broken android
        for (let i = 1; i < this.players.length; i++) {
            let offset = i + 1;
            if (offset == this.players.length) {
                offset = 1;
            }
            this.assignments[this.players[i]] = "Android. Target: " + this.players[offset];
        }      
    }

}

export default selfAware;
