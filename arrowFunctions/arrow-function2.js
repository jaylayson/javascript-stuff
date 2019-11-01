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

/**
 * 2. Arrow functions don't bind their 'this' value either
 * 
 * Lesson: When creating functions related to an object property, do NOT use Arrow functions.
 */
const car = {
    color: 'Yellow',
    getSummary: function(){
        return `The car is ${this.color}`
    }
}
console.log(car.getSummary())

const car0 = {
    color: 'Yellow',
    getSummary: () => `The car is ${this.color}`
    
}
console.log(car0.getSummary())
