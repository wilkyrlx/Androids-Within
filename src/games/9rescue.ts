import { IGameRules } from "../types/IGameRules";

class rescue implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested. Issue found with for loop, fixed now
    assignRoles() {

        // assign roles
        this.assignments[this.players[0]] = "You are the Rescuer Android. You need to figure out who is the Hostage Android and secretly contact them. Either " + this.players[1] + " or " + this.players[2] + " is the hostage android";
        this.assignments[this.players[1]] = "Either you or Player " + this.players[2] + " is the hostage android";
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "Either you or Player " + this.players[1] + " is the hostage android";
        }
    }

}

export default rescue;
