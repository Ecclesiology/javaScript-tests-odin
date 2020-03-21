const leapYears = function(year) {
    let testLeapYear = year % 4;
    let checkLeapYear = year % 400;
    let isLeapYear = year % 100;
    if ((testLeapYear == 0) && (isLeapYear !== 0)) {
        return true;
    } else {
        return false;
    }
}

module.exports = leapYears
