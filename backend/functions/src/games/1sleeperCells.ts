import { IGameRules } from "../types/IGameRules";

class sleeperCells implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    assignRoles() {

        const recruitsCount = this.players.length - 2;
        const aRecruitsCount = recruitsCount / 2;
        const bRecruitsCount = recruitsCount / 2;

        // assign roles
        this.assignments[this.players[0]] = "Leader. Your recruits: " + this.players.slice(2, 2 + aRecruitsCount).toString();
        this.assignments[this.players[1]] = "Leader, Your recruits: " + this.players.slice(2 + aRecruitsCount, 2 + aRecruitsCount + bRecruitsCount).toString();
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "Recruit";
        }
    }

}

export default sleeperCells;