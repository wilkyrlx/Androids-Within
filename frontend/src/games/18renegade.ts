import { IGameRules } from "../types/IGameRules";

class renegade implements IGameRules {
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
        this.assignments[this.players[0]] = 'You are the Watcher Android. Announce yourself. Force your subjects to obey and expose the Renegade or Recruit by name.';
        this.assignments[this.players[1]] = 'You are the Renegade. Obey the Watcher. Player ' + this.players[2];
        for (let i = 2; i < this.players.length; i++) {
            this.assignments[this.players[i]] = "You are Human. Obey the Watcher. You may be the Recruit";
        }      
    }

}

export default renegade;
