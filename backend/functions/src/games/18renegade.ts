import { IGameRules } from "../types/IGameRules";

class renegade implements IGameRules {
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
        this.assignments[this.players[0]] = 'Watcher android';
        this.assignments[this.players[1]] = 'Renegade human. Recruit is: ' + this.players[2];
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "Human";
        }      
    }

}

export default renegade;
