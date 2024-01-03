import { IGameRules } from "../types/IGameRules";

class extraction implements IGameRules {
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
        this.assignments[this.players[0]] = "You are a human hostage of the androids. Look for your two human rescuers."; 
        this.assignments[this.players[1]] = "You are one of two human rescuers trying to save human hostage: " + this.players[0];
        this.assignments[this.players[2]] = "You are one of two human rescuers trying to save human hostage: " + this.players[0];
        for (let i = 3; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "You are a hunter android trying to discover the human hostage or rescuers.";
        }
    }

}

export default extraction;