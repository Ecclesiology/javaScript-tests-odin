const ftoc = function(degrees) {
    let conversion = (( degrees - 32 ) * ( 5 / 9 )).toFixed(1);
    return Number(conversion);
}

const ctof = function(temperature) {

}

module.exports = {
  ftoc,
  ctof
}
