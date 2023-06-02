
// FIXME: currently unused, might want to delete later

/**
 * Player class, represents an individual player
 * 
 * @param id - The player's ID, a number 0 through 15
 * @param name - The player's name, a letter A through L
 * @param role - The player's role, a string
 */
class Player {
    id: number;
    name: string;
    role: string;

    constructor(id: number) {
        this.id = id;
        this.name = this.getNameFromId(id);
        this.role = "no role yet"; // TODO: give player a role
    }

    // Allows letters A through L
    private getNameFromId(id: number): string {
        if (id >= 0 && id <= 15) {
            const letter = String.fromCharCode(65 + id); // A = 65, B = 66, and so on...
            return letter;
        } else {
            return "error";
        }
    }
}

export default Player;