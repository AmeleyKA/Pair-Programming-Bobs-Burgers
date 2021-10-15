const assertEquals = (expectedOutput, actualOutput) => {
    if (expectedOutput.length !== actualOutput.length) {
        return false;
    }
    for (let i = 0; i < expectedOutput.length; i++) {
        if (expectedOutput[i].length !== actualOutput[i].length) {
            return false;
        }
        for (let j = 0; j < expectedOutput[i].length; j++) {
            if (expectedOutput[i][j] !== actualOutput[i][j]) {
                return false;
            }
        }
    }
    return true;

}
module.exports = assertEquals;