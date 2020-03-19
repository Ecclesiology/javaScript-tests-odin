const sumAll = function(start, end) {
    let sum = 0;
    if (start > end) {
        start = end + (end = start, 0)
    }
    
    if ( start < 0 ) {
        return "ERROR";
    } 
    
    for( i = start; i <= end; i++) {
        sum += +i 
    };
    return sum
}


module.exports = sumAll
