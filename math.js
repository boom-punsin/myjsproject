function sum(a,b){
    return a + b;
}


function multipy(a,b){
    return a * b;
}


function devide(a,b){
    if ( b === 0){
        throw new Error("Cannot devide by zero");
    }
    return a / b;
}
module.exports = {sum,multipy,devide};