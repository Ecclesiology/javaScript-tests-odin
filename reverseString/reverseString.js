const reverseString = function(input) {
    let value = new Array;
    let display = ""
    for (let i = input.length - 1; i >= 0; i--) {
        value.push(input[i]);
        display = value.join("");
    }
    return display;
}

module.exports = reverseString
