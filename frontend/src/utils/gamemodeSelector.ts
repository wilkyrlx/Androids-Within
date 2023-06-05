import { shuffleArray } from "../types/IGameRules";
import { sleeperCells, gemini, alone, extraction, doubleAgent, infiltrator, noWayOut, chainOfCommand, rescue, doubleAgentII, assassin, codeTalkers, killSwitch, selfAware, broken, hunted, targetX, renegade, oneAmongUs } from "../games/gameExports";

function generateRolesX(numPlayers: number, gameMode: number): { [key: string]: string } {

    // generates a random string of letters A onwards for each player
    const array: string[] = [];
    for (let i = 0; i < numPlayers; i++) {
        const letter = String.fromCharCode(65 + i);
        array.push(letter);
    }
    const shuffledArray = shuffleArray(array);

    let assignments = {};
    switch (gameMode) {
        case 1:
            // Sleeper Cells
            assignments = new sleeperCells(shuffledArray).assignments;
            break;
        case 2:
            // Gemini
            assignments = new gemini(shuffledArray).assignments;
            break;
        case 3:
            // Alone
            assignments = new alone(shuffledArray).assignments;
            break;
        case 4:
            // Extraction
            assignments = new extraction(shuffledArray).assignments;
            break;
        case 5:
            // Double Agent
            assignments = new doubleAgent(shuffledArray).assignments;
            break;
        case 6:
            // Infiltrator
            assignments = new infiltrator(shuffledArray).assignments;
            break;
        case 7:
            // No Way Out
            assignments = new noWayOut(shuffledArray).assignments;
            break;
        case 8:
            // Chain of Command
            assignments = new chainOfCommand(shuffledArray).assignments;
            break;
        case 9:
            // Rescue
            assignments = new rescue(shuffledArray).assignments;
            break;
        case 10:
            // Double Agent II
            assignments = new doubleAgentII(shuffledArray).assignments;
            break;
        case 11:
            // Assassin
            assignments = new assassin(shuffledArray).assignments;
            break;
        case 12:
            // Code Talkers
            assignments = new codeTalkers(shuffledArray).assignments;
            break;
        case 13:
            // Kill Switch
            assignments = new killSwitch(shuffledArray).assignments;
            break;
        case 14:
            // Self Aware
            assignments = new selfAware(shuffledArray).assignments;
            break;
        case 15:
            // Broken
            assignments = new broken(shuffledArray).assignments;
            break;
        case 16:
            // Hunted
            assignments = new hunted(shuffledArray).assignments;
            break;
        case 17:
            // Target X
            assignments = new targetX(shuffledArray).assignments;
            break;
        case 18:
            // Renegade
            assignments = new renegade(shuffledArray).assignments;
            break;
        case 19:
            // One Among Us
            assignments = new oneAmongUs(shuffledArray).assignments;
            break;

        case 20:
            // Custom
            assignments = {A: "test"};
            break;
        default:
            console.log("Invalid game mode");
            break;
    }

    return assignments;
}

export default generateRolesX;