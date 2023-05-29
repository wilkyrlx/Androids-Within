import { IGameRules } from "../types/IGameRules";

class killSwitch implements IGameRules {
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
        this.assignments[this.players[0]] = 'Human'
        for (let i = 1; i < this.players.length; i++) {
            this.assignments[this.players[i]] = 'Android';
        }        
    }

}

export default killSwitch;
