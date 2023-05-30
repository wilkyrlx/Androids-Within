import { IGameRules } from "../types/IGameRules";

class doubleAgentII implements IGameRules {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: in progress
    assignRoles() {

        // assign roles
        // TODO: complex gamemode, need to finish this
    }

}

export default doubleAgentII;
