/**
 * Generates a pyramid pattern string based on the specified parameters.
 * 
 * @param {Object} options - The options for generating the pyramid.
 * @param {string} [options.character="*"] - The character to be used for the pyramid.
 * @param {number} [options.count=8] - The number of rows in the pyramid.
 * @param {string} [options.align="center"] - The alignment of the pyramid. Can be "center", "left", or "right".
 * @param {boolean} [options.inverted=false] - Whether the pyramid should be inverted.
 * 
 * @returns {string} The generated pyramid pattern as a string.
 * 
 * @example
 * Generates a centered pyramid with 3 rows using "*"
 * generatePyramid({ character: "*", count: 3, align: "center", inverted: false });
 * Returns:
 *   *  
 *  *** 
 * *****
 * 
 * @example
 * Generates a left-aligned pyramid with 4 rows using "#"
 * generatePyramid({ character: "#", count: 4, align: "left", inverted: false });
 * Returns:
 * # 
 * ## 
 * ### 
 * ####
 */
function generatePyramid({ character = "*", count = 8, align = "center", inverted = false } = {}) {
    // Helper function to create a row based on the alignment and row number
    function padRow(rowNumber, rowCount) {
        const spaces = " ".repeat(rowCount - rowNumber);
        const chars = character.repeat(align === "center" ? 2 * rowNumber - 1 : rowNumber);

        if (align === "center") {
            return spaces + chars + spaces;
        } else if (align === "left") {
            return chars;
        } else if (align === "right") {
            return spaces + chars;
        }
    }

    // Generate the pyramid rows
    const rows = Array.from({ length: count }, (_, i) => padRow(i + 1, count));

    // If inverted, reverse the rows
    if (inverted) rows.reverse();

    // Join the rows with newline characters and return the result
    return rows.join("\n");
}


console.log(generatePyramid({ character: "@", count: 5, align: "right", inverted: true }));