import { IGameRules } from "../types/IGameRules";

class noWayOut implements IGameRules {
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
        this.assignments[this.players[0]] = "You are human and being hunted by androids. Identify the Lead android.";
        this.assignments[this.players[1]] = "You are the Lead android. Only you can identify the human. The following player is an android directly below you: " + this.players[2];
        for (let i = 2; i < this.players.length - 1; i++) {
            this.assignments[this.players[i]] = "You are an android. The following player is an android directly below you: " + this.players[i+1];
        }
        this.assignments[this.players[this.players.length - 1]] = "You are the Last android.";
    }

}

export default noWayOut;