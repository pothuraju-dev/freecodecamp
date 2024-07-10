/**
 * Converts a decimal number to its hexadecimal representation.
 * @param {number} n - The decimal number to convert.
 * @returns {string} - The hexadecimal representation of the number.
 */
function decimalToHeaxadecimal(n) {
    const hexDigits = "0123456789ABCDEF";
    let hexNumber = "";
    
    // Special case for single digit decimal numbers
    if (n < 10) return n.toString();

    // Loop until all digits are processed
    while (n >= 10) {
        const remainder = n % 16;
        hexNumber = hexDigits[remainder] + hexNumber;
        n = Math.floor(n / 16);
    }
    return hexNumber;
}

/**
 * Gets the hexadecimal representation for a given number between 0 and 15.
 * @param {number} number - The number to convert.
 * @returns {string} - The hexadecimal character.
 */
function getHexaCode(number) {
    // Convert numbers 0-9 directly to strings
    if (number < 10) return number.toString();
    
    // Convert numbers 10-15 to their corresponding hexadecimal letters
    if (number === 10) return "A";
    else if (number === 11) return "B";
    else if (number === 12) return "C";
    else if (number === 13) return "D";
    else if (number === 14) return "E";
    else if (number === 15) return "F";
}

/**
 * Generates a random number between 1 and 15.
 * @returns {number} - A random number between 1 and 15.
 */
function getRandomNumber() {
    return Math.floor(Math.random() * 15 + 1);
}

/**
 * Generates a random hexadecimal color code.
 * @returns {string} - A random 6-digit hexadecimal color code.
 */
function getRandomColorCode() {
    let code = "#";
    for (let i = 0; i < 6; i++) {
        code += decimalToHeaxadecimal(getRandomNumber());
    }
    return code;
}

// Select DOM elements
const body = document.querySelector('body');
const button = document.querySelector('#btn-click');
const hexCodeText = document.querySelector('#bg-hex-code');

/**
 * Changes the background color of the body to a random hexadecimal color code.
 */
function changeBackgroundColor() {
    const hexCode = getRandomColorCode();
    hexCodeText.innerText = hexCode;
    body.style.backgroundColor = hexCode;
}

// Attach event listener to button
button.onclick = changeBackgroundColor;