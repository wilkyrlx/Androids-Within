import { IGameRules, shuffleArray } from "./IGameRules";

class sleeperCells implements IGameRules {
    players: number[];
    assignments: { [key: number]: string };

    constructor(players: number[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    assignRoles() {
        const recruitsCount = this.players.length - 2;
        const aRecruitsCount = recruitsCount / 2;
        const bRecruitsCount = recruitsCount / 2;

        // randomly shuffle players
        const shuffledPlayers = this.shuffle(this.players);

        // assign roles
        this.assignments[shuffledPlayers[0]] = "Leader: " + shuffledPlayers.slice(2, 2 + aRecruitsCount).toString();
        this.assignments[shuffledPlayers[1]] = "Leader: " + shuffledPlayers.slice(2 + aRecruitsCount, 2 + aRecruitsCount + bRecruitsCount).toString();
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[shuffledPlayers[i]] = "Recruit";
        }
    }

    shuffle(array: number[]): number[] {
        return shuffleArray(array);
    }

}