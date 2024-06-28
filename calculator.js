const {sum, multipy, devide} = require('./math')

function calculate(a,b,c){
    const additionResult = sum(a,b);
    const multiplicationResult = multipy(additionResult, c)
    const devide = multipy(multiplicationResult, 2)
}

module.exports = calculate;