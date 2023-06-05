import { IGameRules } from "../types/IGameRules";

class hunted implements IGameRules {
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
        this.assignments[this.players[0]] = 'Self-aware android. Human: ' + this.players[1];
        this.assignments[this.players[1]] = 'Human';
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "Android";
        }      
    }

}

export default hunted;
