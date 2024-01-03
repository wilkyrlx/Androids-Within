# Game Testing Kit 
This kit can be used to test game logic for all 19 games. The kit will not run unit tests, but instead allows you to see if the output is roughly what should be expected. Emphasis again, this is a rough testing tool.

## Usage
1. Navigate to link [typescript playground](https://www.typescriptlang.org/play)
2. copy/paste code at the bottom of this document
3. change the `assignRoles()` logic to match the game you want to test
4. test with different number of players (i.e. players6, players7, players11, players12, etc.)

## Code
``` javascript
const players6 = ['A', 'B', 'C', 'D', 'E', 'F']
const players7 = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const players11 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']
const players12 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

function shuffleArray(array: string[]): string[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

class tester {
    players: string[];
    assignments: { [key: string]: string };

    constructor(players: string[]) {
        this.players = players;
        this.assignments = {};
        this.assignRoles();
    }

    // Status: ready for testing
    assignRoles() {

    }

}

const test = new tester(players6)
console.log(test.assignments)
```