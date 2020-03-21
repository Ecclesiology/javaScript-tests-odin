const ftoc = function(degreesFahrenheit) {
    let conversion = (( degreesFahrenheit - 32 ) * ( 5 / 9 )).toFixed(1);
    return Number(conversion);
}

const ctof = function(degreesCelsius) {
    let conversion = ((( degreesCelsius * ( 9 / 5 )) + 32)).toFixed(1);
    return Number(conversion);
}

module.exports = {
  ftoc,
  ctof
}
