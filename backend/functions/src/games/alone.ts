import { IGameRules, shuffleArray } from "../types/IGameRules";

class alone implements IGameRules {
    players: number[];
    assignments: { [key: number]: string };

    constructor(players: number[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    assignRoles() {
        // randomly shuffle players
        const shuffledPlayers = shuffleArray(this.players);

        const androidsCount = this.players.length - 2;

        // assign roles
        this.assignments[shuffledPlayers[0]] = "Target: " + shuffledPlayers[1]; 
        for (let i = 1; i < shuffledPlayers.length; i++) {
            this.assignments[shuffledPlayers[i]] = "Target: " + shuffledPlayers[0];
        }
    }

}