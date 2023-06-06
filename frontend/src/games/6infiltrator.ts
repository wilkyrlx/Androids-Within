import { IGameRules } from "../types/IGameRules";

class infiltrator implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested
    assignRoles() {

        // assign roles
        this.assignments[this.players[0]] = "You are the only infiltrator human. Stay concealed and identify the android leader.";
        this.assignments[this.players[1]] = "You are an android. Your leader must identify the infiltrator. Either you or the following player is the android leader: " + this.players[2];

        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "You are an android. Your leader must identify the infiltrator. Either you or the following player is the android leader: " + this.players[1];
        }
    }

}

export default infiltrator;