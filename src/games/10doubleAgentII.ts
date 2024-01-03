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
        const contactA2 = this.players[2];
        const contactB  = this.players[1 + teamCount];
        const contactB2 = this.players[2 + teamCount];

        // assign roles
        this.assignments[this.players[0]] = `You are a Double Agent. Stay undetected. One team includes ${contactA}-you-${contactA2}. The other team includes ${contactB}-you-${contactB2}.`;
        this.assignments[this.players[1]] = "You are a member of a team. Reveal the Double Agent. The following player is also on your team: " + this.players[0];
        this.assignments[this.players[1 + teamCount]] = "You are a member of a team. Reveal the Double Agent. The following player is also on your team: " + this.players[0];

        // Team 1 
        for (let i = 2; i < 1 + teamCount; i++) {
            let offset = i + 1;
            if (offset == 1 + teamCount) {
                offset = 0; // double agent
            }
            this.assignments[this.players[i]] = "You are a member of a team. Reveal the Double Agent. The following player is also on your team: " + this.players[offset];
        }

        // Team 2
        for (let i = 2 + teamCount; i < 1 + teamCount + teamCount; i++) {
            let offset = i + 1;
            if (offset == 1 + teamCount + teamCount) {
                offset = 0; // double agent
            }
            this.assignments[this.players[i]] = "You are a member of a team. Reveal the Double Agent. The following player is also on your team: " + this.players[offset];
        }

    }

}

export default doubleAgentII;
