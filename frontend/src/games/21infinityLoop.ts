import { IGameRules } from "../types/IGameRules";

class infinityLoop implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested
    assignRoles() {
        
        const teamSize = this.players.length / 2;

        // assign roles
        this.assignments[this.players[0]] = 'You are an assassin. Your contact is ' + this.players[1];     // android
        for (let i = 1; i < teamSize; i++) {
            if (i + 1 == teamSize) {
                this.assignments[this.players[i]] = "You are an informant. The enemy assassin is " + this.players[i+1];   // android            
            } else {
                this.assignments[this.players[i]] = "Your contact is " + this.players[i+1];   // android            
            }
        }
        this.assignments[this.players[teamSize]] = 'You are an assassin. Your contact is ' + this.players[teamSize + 1];     // human
        for (let i = teamSize + 1; i < this.players.length; i++) {
            if (i + 1 == this.players.length) {
                this.assignments[this.players[i]] = "You are an informant. The enemy assassin is " + this.players[0];   // human            
            } else {
                this.assignments[this.players[i]] = "Your contact is " + this.players[i+1];   // human            
            }
        }

    }

}

export default infinityLoop;
