import { IGameRules } from "../types/IGameRules";

class chainOfCommand implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: ready for testing
    assignRoles() {

        // assign roles
        this.assignments[this.players[0]] = "Alpha android. Decoy android: " + this.players[1];
        this.assignments[this.players[1]] = "Decoy android. Alpha android: " + this.players[0];
        this.assignments[this.players[2]] = "Embedded human. Alpha android: " + this.players[0];
        this.assignments[this.players[3]] = "Lead human. Human below: " + this.players[4];
        for (let i = 4; i < this.players.length; i++) {
            let offset = i + 1;
            if (offset == this.players.length) {
                offset = 4;
            }
            this.assignments[this.players[i]] = "Human. Human below: " + this.players[offset];
        }
    }

}

export default chainOfCommand;