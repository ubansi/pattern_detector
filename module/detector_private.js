const DetectorPrivate = function () { };

const NULL = 0;
const NUMBER = 1;
const LOWER_ALPHABET = 2;
const UPPER_ALPHERBET = 3;
const OTHER = 4;


/**
 * 
 * @param {Array<string>} input 
 */
DetectorPrivate.prototype.divideColumn = (input) => {

    const dividedInput = input.map(str => {
        return str.split('');
    });

    const maxLength = getMaxLength(input);

    let resultArray = [];

    dividedInput.forEach((inputCharArray) => {

        while (inputCharArray.length < maxLength) {
            inputCharArray.push(null);
        }


        inputCharArray.forEach((char, charIndex) => {

            if (resultArray[charIndex] === undefined) {
                resultArray[charIndex] = [];
            }

            resultArray[charIndex].push(char);
        });

        return resultArray;
    });

    return resultArray;
}
/**
 * 
 * @param {Array<string|Number>} inputArray 
 */
DetectorPrivate.prototype.getMaxLength = getMaxLength = (inputArray) => {

    let length = 0;

    inputArray.forEach(str => {
        if (length < str.length) {
            length = str.length;
        }
    });

    return length;
}

/**
 * 
 * @param {string} char 
 * @returns 
 */
const isUpperAlphabet = char => {
    const ans = char.toString().match(/^[A-Z]$/);
    return ans ? true : false;
}

DetectorPrivate.prototype.isUpperAlphabet = isUpperAlphabet;

const isLowerAlphabet = char => {
    const ans = char.toString().match(/^[a-z]$/);
    return ans ? true : false;
}

DetectorPrivate.prototype.isLowerAlphabet = isLowerAlphabet;


const isNumber = char => {
    const ans = char.toString().match(/^\d$/);
    return ans ? true : false;
}

DetectorPrivate.prototype.isNumber = isNumber;

/**
 * 
 * @param {Array<string>} charArray 
 */
DetectorPrivate.prototype.charTypeDetect = (charArray) => {

    const type = new Set();

    charArray.forEach(char => {
        if (char === null) {
            type.add(NULL);
        } else if (isNumber(char)) {
            type.add(NUMBER);
        } else if (isLowerAlphabet(char)) {
            type.add(LOWER_ALPHABET);
        } else if (isUpperAlphabet(char)) {
            type.add(UPPER_ALPHERBET);
        } else {
            type.add(OTHER);
        }
    });

    return Array.from(type).sort();

}

module.exports = DetectorPrivate;