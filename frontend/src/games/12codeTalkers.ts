import { IGameRules } from "../types/IGameRules";

class codeTalkers implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: kit tested
    assignRoles() {

        // generate three random codes, where each code is either 1, 2, or 3
        const codeA = Math.floor(Math.random() * 3) + 1;
        const codeB = Math.floor(Math.random() * 3) + 1;
        const codeC = Math.floor(Math.random() * 3) + 1;

        // assign roles
        this.assignments[this.players[0]] = `You are the Receiver Android. Add up all Codes. Your Transmitters are ${this.players[1]}, ${this.players[2]}, ${this.players[3]}`;
        this.assignments[this.players[1]] = `You are a Transmitter Android. The Receiver is ${this.players[0]}. Your code is ${codeA}`;
        this.assignments[this.players[2]] = `You are a Transmitter Android. The Receiver is ${this.players[0]}. Your code is ${codeB}`;
        this.assignments[this.players[3]] = `You are a Transmitter Android. The Receiver is ${this.players[0]}. Your code is ${codeC}`;
        for (let i = 4; i < this.players.length; i++) {
            this.assignments[this.players[i]] = `You are a Human. Identify the Receiver or identify a Transmitter's code.`;
        }        
    }

}

export default codeTalkers;
