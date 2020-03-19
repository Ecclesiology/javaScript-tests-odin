const sumAll = function(start, end) {
    let sum = "";
    for( i = start; i <= end; i++) {
        sum += i
    };
    return sum
}

module.exports = sumAll
