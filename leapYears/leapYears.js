const leapYears = function(year) {
    let testLeapYear = year % 4;
    let checkLeapYear = year % 400;
    if (testLeapYear == 0) {
        return true;
    }
}

module.exports = leapYears
