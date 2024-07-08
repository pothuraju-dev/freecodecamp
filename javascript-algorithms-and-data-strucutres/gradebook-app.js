/**
 * Calculates the grade for a given score and provides class average and pass/fail status.
 * 
 * @param {number[]} all_scores - An array of all student scores.
 * @param {number} score - The student's score.
 * 
 * @returns {string} The class average, the student's grade, and pass/fail status.
 */
function getStudentGrade(all_scores, score) {
    // Helper function to calculate the average of an array of scores
    function getAverage(scores) {
        const sum = scores.reduce((acc, curr) => acc + curr, 0);
        return sum / scores.length;
    }

    // Helper function to get the grade based on the score
    function getGrade(score) {
        if (score === 100) return "A++";
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }

    // Helper function to determine if the grade is passing
    function hasPassingGrade(score) {
        return getGrade(score) !== 'F';
    }

    const classAverage = getAverage(all_scores).toFixed(2); // Rounded to 2 decimal places for clarity
    const grade = getGrade(score);
    const passStatus = hasPassingGrade(score) ? 'passed' : 'failed';

    return `Class average: ${classAverage}. Your grade: ${grade}. You ${passStatus} the course.`;
}

// Example usage
console.log(getStudentGrade([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));