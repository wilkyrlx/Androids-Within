import { IGameRules } from "../types/IGameRules";

class spyVsSpy implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested
    assignRoles() {
        const assassinAndroid = this.players[0];
        const assassinHuman = this.players[1];

        // number of middlemen, i.e. androids or humans who are not assassins or informants
        // i.e. for 6 players, there are 2 middlemen, so middleManCount is 1 (1 per team)
        const middleManCount = (this.players.length - 4) / 2;


        // assign roles
        this.assignments[assassinAndroid] = 'You are an assassin';     // android
        this.assignments[assassinHuman] = 'You are an assassin';       // human
        this.assignments[this.players[2]] = `You are an informant. Player ${assassinHuman} is the enemy assassin, and Player ${this.players[4]} is your contact`;   // android
        this.assignments[this.players[3]] = `You are an informant. Player ${assassinAndroid} is the enemy assassin, and Player ${this.players[4 + middleManCount]} is your contact`;  // human
        for (let i = 4; i < 4 + middleManCount; i++) {
            if (i + 1 == 4 + middleManCount) {
                this.assignments[this.players[i]] = "Your contact is " + assassinAndroid;   // android            
            } else {
                this.assignments[this.players[i]] = "Your contact is " + this.players[i + 1];   // android            
            }
        }    
        for (let i = 4 + middleManCount; i < this.players.length; i++) {
            if (i + 1 == this.players.length) {
                this.assignments[this.players[i]] = "Your contact is " + assassinHuman;   // human            
            } else {
                this.assignments[this.players[i]] = "Your contact is " + this.players[i + 1];   // human            
            }
        }  
    }

}

export default spyVsSpy;
