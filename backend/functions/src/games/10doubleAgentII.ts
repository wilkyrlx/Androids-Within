import { IGameRules } from "../types/IGameRules";

class doubleAgentII implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested. Issue with contactA and contactB, fixed
    assignRoles() {
        const teamCount = (this.players.length - 1) / 2
        const contactA  = this.players[1];
        const contactB  = this.players[1 + teamCount];

        // assign roles
        this.assignments[this.players[0]] = "Double Agent. Contacts: " + contactA + ", " + contactB;

        // Team 1 
        for (let i = 1; i < 1 + teamCount; i++) {
            let offset = i + 1;
            if (offset == 1 + teamCount) {
                offset = 0; // double agent
            }
            this.assignments[this.players[i]] = "Team. Team member: " + this.players[offset];
        }

        // Team 2
        for (let i = 1 + teamCount; i < 1 + teamCount + teamCount; i++) {
            let offset = i + 1;
            if (offset == 1 + teamCount + teamCount) {
                offset = 0; // double agent
            }
            this.assignments[this.players[i]] = "Team. Team member: " + this.players[offset];
        }

    }

}

export default doubleAgentII;
