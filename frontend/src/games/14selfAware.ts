import { IGameRules } from "../types/IGameRules";

class selfAware implements IGameRules {
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
        this.assignments[this.players[0]] = 'Self-aware android. Human is: ' + this.players[1];
        for (let i = 1; i < this.players.length; i++) {
            this.assignments[this.players[i]] = 'Android or Human';
        }        
    }

}

export default selfAware;
