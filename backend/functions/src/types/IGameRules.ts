interface IGameRules {
    players: string[];
    assignments: { [key: string]: string };
    assignRoles(): void;
}

// TODO: is this shuffle function actually random? try to prove it
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

export { IGameRules, shuffleArray}