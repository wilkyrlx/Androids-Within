import { IGameRules, shuffleArray } from "../types/IGameRules";

class gemini implements IGameRules {
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
        this.assignments[shuffledPlayers[0]] = "Human";
        this.assignments[shuffledPlayers[1]] = "Human";
        for (let i = 2; i < shuffledPlayers.length; i++) {
            let offset = i + 1;
            if (offset == shuffledPlayers.length) {
                offset = 2;
            }
            this.assignments[shuffledPlayers[i]] = "Android. Partner: " + shuffledPlayers[offset];
        }
    }

}