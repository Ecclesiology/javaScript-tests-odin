const sumAll = function(start, end) {
    const isString = value => typeof value === "string" || value instanceof String
    let sum = 0;
    if (start > end) {
        start = end + (end = start, 0)
    }
    
    if (( start < 0 ) || ( end < 0)) {
        return "ERROR";
    } else if ((isNaN(start)) || (isNaN(end))) {
        return "ERROR";
    } else if ((isString(start)) || (isString(end))) {
        return "ERROR";
    }
    
    for( i = start; i <= end; i++) {
        sum += +i 
    };
    return sum
}


module.exports = sumAll
