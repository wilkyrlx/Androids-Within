import { IGameRules } from "../types/IGameRules";

class killSwitch implements IGameRules {
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
        this.assignments[this.players[0]] = 'You are the only Human. Blink both eyes at Androids to kill them before they identify you.'
        for (let i = 1; i < this.players.length; i++) {
            this.assignments[this.players[i]] = 'You are an Android. You must slowly look at all players. Identify the Human before he shuts you down.';
        }        
    }

}

export default killSwitch;
