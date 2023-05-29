import { IGameRules } from "../types/IGameRules";

class rescue implements IGameRules {
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
        this.assignments[this.players[0]] = "Rescuer android. Either: " + this.players[1] + " or " + this.players[2] + " is the hostage android";
        this.assignments[this.players[1]] = "You or " + this.players[2] + " are the hostage android";
        for (let i = 4; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "You or " + this.players[1] + " are the hostage android";
        }
    }

}

export default rescue;
