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
        this.assignments[this.players[0]] = 'You are the Self-Aware Android. Indicate to your fellow Androids that the Human is ' + this.players[1];
        this.assignments[this.players[1]] = 'You are the only Human. Kill the Self-Aware Android before the other Androids kill you';
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "You are an Android awaiting orders from the Self-Aware Android";
        }      
    }

}

export default hunted;
