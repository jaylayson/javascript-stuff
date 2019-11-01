/**
 * Difference between standard functions vs arrow functions
 * 1. Arrow functions does not have access to arguments
 * 2. Arrow functions don't bind their 'this' value
 */
const add = function(){
    return arguments [0] + arguments[1]
}
console.log(add(1,2))

const add1 = () => arguments[0] + arguments[1]
console.log(add1(1,2))