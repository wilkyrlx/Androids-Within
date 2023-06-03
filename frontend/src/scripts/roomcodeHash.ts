// Currently unused

// Generates a 4 digit code
// Note: this code works for numbers 0-999. Is also kind of ugly
function numberToCode(number: number) {
    const encoded = Buffer.from(String(number)).toString('base64');
    const code = encoded.slice(0, 4);   // change here to add for more numbers
    return code;
}

function codeToNumber(code: string) {
    const paddedCode = code.padEnd(2, '=');
    const decoded = Buffer.from(paddedCode, 'base64').toString('utf-8');
    const number = parseInt(decoded, 10);
    return number;
}

export { numberToCode, codeToNumber }