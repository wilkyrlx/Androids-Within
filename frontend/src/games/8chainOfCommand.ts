import { IGameRules } from "../types/IGameRules";

class chainOfCommand implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested. Issue found with offset, fixed
    assignRoles() {

        // assign roles
        this.assignments[this.players[0]] = "You are the Alpha Android. Find the Embedded Human. Do not get identified by the Lead Human. The Decoy Android is: " + this.players[1];
        this.assignments[this.players[1]] = "You are the Decoy Android. Find the Embedded Human. Protect the Alpha Android. The Alpha Android is: " + this.players[0];
        this.assignments[this.players[2]] = "You are a human embedded in an android stronghold. Communicate the identity of the Alpha Android to the Lead Human. The Alpha Android is: " + this.players[0];
        this.assignments[this.players[3]] = "You are the Lead Human. Only you can identify the Alpha Android. The following player is a Human directly below you: " + this.players[4];
        for (let i = 4; i < this.players.length; i++) {
            let offset = i + 1;
            if (offset == this.players.length) {
                offset = 2;
            }
            this.assignments[this.players[i]] = "You are a human. The following player is a human directly below you: " + this.players[offset];
        }
    }

}

export default chainOfCommand;