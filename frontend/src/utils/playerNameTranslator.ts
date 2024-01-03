const playerNameTranslator = {
    
    // translates the letter to a number
    // Returns -1 if the letter is not a valid player ID, if the string is not a letter, or if the string is empty
    nameToID: (letter: string): number => {
        if (letter === '' || letter.length > 1) {
            return -1;
        }

        letter = letter.toUpperCase();
        const playerIdNumber: number = letter.charCodeAt(0) - 'A'.charCodeAt(0);
        
        if (playerIdNumber < 0 || playerIdNumber > 11) {
            return -1;
        }
        return playerIdNumber;
    },

    idToName: (playerIdNumber: number): string => { 
        if (playerIdNumber < 0 || playerIdNumber > 11) {
            return '';
        }
        return String.fromCharCode('A'.charCodeAt(0) + playerIdNumber);
    }
}

export default playerNameTranslator
