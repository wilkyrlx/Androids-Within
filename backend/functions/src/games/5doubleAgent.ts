import { IGameRules } from "../types/IGameRules";

class doubleAgent implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: ready for testing
    assignRoles() {
        const teamCount = (this.players.length - 1) / 2

        // assign roles
        this.assignments[this.players[0]] = "Double Agent";

        // Team 1 
        for (let i = 1; i < 1 + teamCount; i++) {
            let offset = i + 1;
            if (offset == 1 + teamCount) {
                offset = 2;
            }
            this.assignments[this.players[i]] = "Team. Team member: " + this.players[offset];
        }

        // Team 2
        for (let i = 1 + teamCount; i < 1 + teamCount + teamCount; i++) {
            let offset = i + 1;
            if (offset == 1 + teamCount + teamCount) {
                offset = 2 + teamCount;
            }
            this.assignments[this.players[i]] = "Team. Team member: " + this.players[offset];
        }
    }

}

export default doubleAgent;