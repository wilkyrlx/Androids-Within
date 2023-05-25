import { IGameRules, shuffleArray } from "../types/IGameRules";

class sleeperCells implements IGameRules {
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

        const recruitsCount = shuffledPlayers.length - 2;
        const aRecruitsCount = recruitsCount / 2;
        const bRecruitsCount = recruitsCount / 2;

        // assign roles
        this.assignments[shuffledPlayers[0]] = "Leader. Your recruits: " + shuffledPlayers.slice(2, 2 + aRecruitsCount).toString();
        this.assignments[shuffledPlayers[1]] = "Leader, Your recruits: " + shuffledPlayers.slice(2 + aRecruitsCount, 2 + aRecruitsCount + bRecruitsCount).toString();
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[shuffledPlayers[i]] = "Recruit";
        }
    }

}