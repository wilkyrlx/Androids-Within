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
        this.assignments[this.players[0]] = 'You are the Self-Aware Android. Indicate to your fellow Androids that the Human is ' + this.players[1];
        for (let i = 1; i < this.players.length; i++) {
            this.assignments[this.players[i]] = 'You are an Android or a Human. The Self-Aware Android may instruct you to kill the Human. Unless you are the Human . . .';
        }        
    }

}

export default selfAware;
