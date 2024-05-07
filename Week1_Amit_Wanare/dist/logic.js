"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretHandshake = exports.checkYear = exports.concatString = exports.splitString = void 0;
function splitString(inputString) {
    return inputString.split("_").join(" ");
}
exports.splitString = splitString;
function concatString(inputString1, inputString2) {
    return inputString1 + inputString2;
}
exports.concatString = concatString;
function checkYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}
exports.checkYear = checkYear;
function secretHandshake(num) {
    const binary = num.toString(2).padStart(5, '0');
    const decrypt = [];
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            switch (i) {
                case 0:
                    decrypt.reverse();
                    break;
                case 1:
                    decrypt.push('jump');
                    break;
                case 2:
                    decrypt.push('close your eyes');
                    break;
                case 3:
                    decrypt.push('double blink');
                    break;
                case 4:
                    decrypt.push('wink');
                    break;
            }
        }
    }
    return decrypt;
}
exports.secretHandshake = secretHandshake;
//# sourceMappingURL=logic.js.map