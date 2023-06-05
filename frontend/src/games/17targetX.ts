import { IGameRules } from "../types/IGameRules";

class targetX implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested: issue with player assignment selection, fixed
    assignRoles() {

        // assign roles
        this.assignments[this.players[0]] = 'Android';
        this.assignments[this.players[1]] = `Human. Player ${this.players[0]} is either an android or the informant.`;
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = `Human. Player ${this.players[1]} is either an android or the informant.`;
        }      
    }

}

export default targetX;
