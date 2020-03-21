const ftoc = function(degreesFahrenheit) {
    let conversion = (( degreesFahrenheit - 32 ) * ( 5 / 9 )).toFixed(1);
    return Number(conversion);
}

const ctof = function(degreesCelsius) {
    
}

module.exports = {
  ftoc,
  ctof
}
