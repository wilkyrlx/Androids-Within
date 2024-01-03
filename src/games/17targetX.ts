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
        this.assignments[this.players[0]] = 'You are an Android. Find the Informant Human';
        this.assignments[this.players[1]] = `You are Human. Player ${this.players[0]} is either your Informant or an Android.`;
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = `You are Human. Player ${this.players[1]} is either your Informant or an Android.`;
        }      
    }

}

export default targetX;
