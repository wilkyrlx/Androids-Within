import { IGameRules } from "../types/IGameRules";

class doubleAgent implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested. Issue found with offset, fixed
    assignRoles() {
        const teamCount = (this.players.length - 1) / 2

        // assign roles
        this.assignments[this.players[0]] = "You are a Double Agent. Stay undetected.";

        // Team 1 
        for (let i = 1; i < 1 + teamCount; i++) {
            let offset = i + 1;
            if (offset == 1 + teamCount) {
                offset = 1;
            }
            this.assignments[this.players[i]] = "You are a member of a team. Identify the Double Agent. The following player is on your team: " + this.players[offset];
        }

        // Team 2
        for (let i = 1 + teamCount; i < 1 + teamCount + teamCount; i++) {
            let offset = i + 1;
            if (offset == 1 + teamCount + teamCount) {
                offset = 1 + teamCount;
            }
            this.assignments[this.players[i]] = "You are a member of a team. Identify the Double Agent. The following player is on your team: " + this.players[offset];
        }
    }

}

export default doubleAgent;