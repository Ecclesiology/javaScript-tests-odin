const repeatString = function(speak , n) {
    let spoke = "";
    for (let i = 0; i < n; i++) {
        spoke += speak.toString();
        }
        if ( n == -1 ) {
            return spoke += "ERROR"
        }
        return spoke;
    }


module.exports = repeatString
