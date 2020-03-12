const removeFromArray = function(...input , ...reject) {
    let value = new Array
    let display = ""
    
    for ( let i = 0; i <= input.length - 1; i++ ) {
        let deny = [...reject];
        value.push(input[i]);
        display = value.filter(function(accept){
            return accept != deny
        });
    }
    return display
}

module.exports = removeFromArray
