import { IGameRules } from "../types/IGameRules";

class assassin implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: ready for testing
    assignRoles() {

        const informantCount = this.players.length - 3;
        let minorityCount = Math.floor(informantCount / 2);
        let majorityCount = informantCount - minorityCount;

        // if even number of informants, make one a majority
        if (minorityCount == majorityCount) {
            minorityCount--;
            majorityCount++;
        }

        // assign roles
        this.assignments[this.players[0]] = "Assassin";
        this.assignments[this.players[1]] = "Potential target";
        this.assignments[this.players[2]] = "Potential target";
        for (let i = 3; i < 3 + minorityCount; i++) {
            this.assignments[this.players[i]] = "Informant. Target: " + this.players[1];
        }
        for (let i = 3 + minorityCount; i < 3 + minorityCount + majorityCount; i++) {
            this.assignments[this.players[i]] = "Informant. Target: " + this.players[2];
        }   
    }

}

export default assassin;
