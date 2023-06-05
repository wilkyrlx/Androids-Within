import { IGameRules } from "../types/IGameRules";

class oneAmongUs implements IGameRules {
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
        this.assignments[this.players[0]] = 'Target: ' + this.players[3];   // android
        this.assignments[this.players[1]] = 'Target: ' + this.players[2];   // human leader
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "Target: " + this.players[1];   // human
        }      
    }

}

export default oneAmongUs;
