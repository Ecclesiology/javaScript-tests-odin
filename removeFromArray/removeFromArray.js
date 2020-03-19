const removeFromArray = function(input , ...reject) {
    return input.filter(element => !reject.includes(element))
}

module.exports = removeFromArray
