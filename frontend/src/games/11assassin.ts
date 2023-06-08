import { IGameRules } from "../types/IGameRules";

class assassin implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested
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
        this.assignments[this.players[0]] = "You are the Assassin Human. Discover your Target Android from the Informants.";
        this.assignments[this.players[1]] = "You might be a Hunted Android. If you think so, shout Escape! If not, just stay calm and don’t panic";
        this.assignments[this.players[2]] = "You might be a Hunted Android. If you think so, shout Escape! If not, just stay calm and don’t panic";
        for (let i = 3; i < 3 + minorityCount; i++) {
            this.assignments[this.players[i]] = "You are an Informant. Secretly tell the Assassin " + this.players[1];
        }
        for (let i = 3 + minorityCount; i < 3 + minorityCount + majorityCount; i++) {
            this.assignments[this.players[i]] = "You are an Informant. Secretly tell the Assassin " + this.players[2];
        }   
    }

}

export default assassin;
